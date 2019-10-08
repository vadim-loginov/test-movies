import { Injectable } from '@angular/core';
import { MovieDetailsConfig } from '../movie-details.config';
import { HttpClient } from '@angular/common/http';
import { IMovie } from 'src/app/interfaces';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient,
    private movieDetailsConfig: MovieDetailsConfig,
  ) { }

  getMovieById(id: number|string): Promise<IMovie> {
    return this.http.get<IMovie>(this.movieDetailsConfig.api.getMovieById + id).toPromise();
  }

  getMovieTags(movieId: number): Promise<string[]> {
    const favourites = {
      854: {
        tags: ['one', 'two', 'three'],
      }
    };

    if (movieId in favourites) {
      return Promise.resolve(favourites[movieId].tags);
    } else {
      return Promise.resolve([]);
    }
  }

  getUserTags(): Promise<string[]> {
    return Promise.resolve(['one', 'two', 'three', 'five', 'four']);
  }
}
