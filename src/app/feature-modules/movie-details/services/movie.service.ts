import { Injectable } from '@angular/core';
import { MovieDetailsConfig } from '../movie-details.config';
import { HttpClient } from '@angular/common/http';
import { IMovie } from 'src/app/interfaces';
import { UserSettingsService } from 'src/app/services/user-settings.service';

@Injectable()
export class MovieService {
  private movieTags: any;
  private userTags: string[];

  constructor(
    private http: HttpClient,
    private movieDetailsConfig: MovieDetailsConfig,
    private userSettings: UserSettingsService
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

  getUserTags(): Promise<string[]> {
    this.userTags = this.userTags || this.userSettings.userTags;

    return Promise.resolve(this.userTags || []);
  }

  addMovieTag(movieId, tag) {
    this.movieTags = this.movieTags || {};

    if (!(movieId in this.movieTags)) {
      this.movieTags[movieId] = { tags: [] };
    }

    const tags = this.movieTags[movieId].tags;

    if (tags.indexOf(tag) < 0) {
      tags.push(tag);
      this.userSettings.movieTags = this.movieTags;
    }
  }

  removeMovieTag(movieId, tag) {
    this.movieTags[movieId].tags.splice(this.movieTags[movieId].tags.indexOf(tag), 1);
    this.userSettings.movieTags = this.movieTags;
  }
}
