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
    getMovieList: 'discover/movie?primary_release_year=2019&sort_by=vote_average.desc',
    searchMoviesUrl: 'search/movie',
  },
};
