import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListConfig } from '../movie-list.config';

@Injectable()
export class MovieListService {
  constructor(
    private http: HttpClient,
    private moduleCongif: MovieListConfig,
  ) {}

  getList() {
    return this.http.get(this.moduleCongif.api.getMovieList);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.moduleCongif.api.searchMoviesUrl}?query=${query}&page=1`, { observe: 'body' });
  }
}
