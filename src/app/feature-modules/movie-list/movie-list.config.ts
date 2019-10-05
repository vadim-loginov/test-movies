import { Injectable } from '@angular/core';

@Injectable()
export class MovieListConfig {
  defaultDebounceTime = 500;
  api = {
    getMovieList: 'discover/movie?primary_release_year=2019&sort_by=vote_average.desc',
    searchMoviesUrl: 'search/movie',
  };
}
