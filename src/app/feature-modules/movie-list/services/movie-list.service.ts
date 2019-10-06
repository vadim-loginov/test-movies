import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListConfig } from '../movie-list.config';
import { IFilterColumn } from 'src/app/interfaces';

@Injectable()
export class MovieListService {
  constructor(
    private http: HttpClient,
    private moduleCongif: MovieListConfig,
  ) {}

  getList() {
    return this.http.get(this.moduleCongif.api.getMovieList);
  }

  searchMovies(query: string, page: number = 1) {
    return this.http.get(`${this.moduleCongif.api.searchMoviesUrl}?query=${query}&page=${page}`, { observe: 'body' });
  }

  getFilterColumns() {
    const defaultFilterColumns: IFilterColumn[] = [
      {
        id: 'poster',
        name: 'Poster',
        selected: true,
      },
      {
        id: 'title',
        name: 'Title',
        selected: true,
      },
      {
        id: 'language',
        name: 'Lang',
        selected: true,
      },
      {
        id: 'release',
        name: 'Release date',
        selected: true,
      },
      {
        id: 'genre',
        name: 'Genre',
        selected: true,
      },
      {
        id: 'popularity',
        name: 'Populariyt',
        selected: true,
      },
      {
        id: 'overview',
        name: 'Overvie',
        selected: true,
      },
    ];
    return Promise.resolve(defaultFilterColumns);
  }
}
