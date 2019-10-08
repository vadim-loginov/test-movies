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

  getMovieTags(moveiId: number): Promise<any> {
    const favourites = {
      854: {
        tags: ['one', 'two', 'three'],
      }
    };

    return Promise.resolve(favourites[moveiId].tags);
  }

  getUserTags(): Promise<string[]> {
    return Promise.resolve(['one', 'two', 'three', 'five', 'four']);
  }
}
