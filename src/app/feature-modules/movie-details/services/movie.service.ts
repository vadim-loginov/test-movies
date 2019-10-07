import { Injectable } from '@angular/core';
import { MovieDetailsConfig } from '../movie-details.config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient,
    private movieDetailsConfig: MovieDetailsConfig,
  ) { }

  getMovieById(id: number|string) {
    return this.http.get(this.movieDetailsConfig.api.getMovieById + id).toPromise();
  }
}
