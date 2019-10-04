import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MODULE_CONFIG, IMovieListConfig } from '../movie-list.config';

@Injectable()
export class MovieListService {
  constructor(
    private http: HttpClient,
    @Inject(MODULE_CONFIG) private moduleConfig: IMovieListConfig,
  ) {}

  getList() {
    return this.http.get(this.moduleConfig.api.getMovieList);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.moduleConfig.api.searchMoviesUrl}?query=${query}&page=1`, { observe: 'body' })

  }
}
