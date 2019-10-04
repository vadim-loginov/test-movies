import { InjectionToken } from '@angular/core';

export interface IMovieListConfig {
  defaultDebounceTime: number;
  api: {
    getMovieList: string;
    searchMoviesUrl: string;
  };
}

export const MODULE_CONFIG = new InjectionToken<IMovieListConfig>('movie-list.config');

export const movieListConfig: IMovieListConfig = {
  defaultDebounceTime: 500,
  api: {
    getMovieList: 'https://api.themoviedb.org/3/discover/movie?primary_release_year=2019&sort_by=vote_average.desc&api_key=2cdb1b1199194ebc0348f30796fa41c8',
    // searchMoviesUrl: 'search/movie',
    searchMoviesUrl: 'https://api.themoviedb.org/3/search/movie',
  },
};
