import { Injectable } from '@angular/core';

@Injectable()
export class MoviesConfig {
  defaultDebounceTime = 500;
  api = {
    getMovieList: '{mdb}discover/movie?primary_release_year=2019&sort_by=vote_average.desc',
    searchMoviesUrl: '{mdb}search/movie',
    getGenres: '{mdb}genre/movie/list',
  };
}
