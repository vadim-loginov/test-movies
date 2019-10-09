import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TagsService } from 'src/app/common/services/common-tags.service';
import { UserSettingsService } from 'src/app/common/services/user-settings.service';

import { MovieDetailsConfig } from '../movie-details.config';
import { IMovie } from 'src/app/common/interfaces';

@Injectable()
export class MovieService {
  private movieTags: any;

  constructor(
    private http: HttpClient,
    private movieDetailsConfig: MovieDetailsConfig,
    private userSettings: UserSettingsService,
    private tagsService: TagsService,
  ) { }

  getMovieById(id: number|string): Promise<IMovie> {
    return this.http.get<IMovie>(this.movieDetailsConfig.api.getMovieById + id).toPromise();
  }

  getMovieTags(movieId: number): Promise<string[]> {
    this.movieTags = this.movieTags || this.userSettings.movieTags;

    if (!this.movieTags || !(movieId in this.movieTags)) {
      return Promise.resolve([]);
    } else {
      return Promise.resolve(this.movieTags[movieId].tags);
    }
  }

  addMovieTag(movie: IMovie, tag) {
    this.movieTags = this.movieTags || {};

    if (!(movie.id in this.movieTags)) {
      this.movieTags[movie.id] = {
        id: movie.id,
        name: movie.title,
        tags: [],
      };
    }

    const tags = this.movieTags[movie.id].tags;

    if (tags.indexOf(tag) < 0) {
      tags.push(tag);
      this.userSettings.movieTags = this.movieTags;
      this.tagsService.addUserTag(tag);
    }
  }

  removeMovieTag(movieId, tag) {
    this.movieTags[movieId].tags.splice(this.movieTags[movieId].tags.indexOf(tag), 1);
    this.removeUnusedMovieFromSettings(movieId);
    this.userSettings.movieTags = this.movieTags;
  }

  removeUnusedMovieFromSettings(movieId) {
    if (!this.movieTags[movieId].tags.length) {
      delete this.movieTags[movieId];
    }
  }
}
