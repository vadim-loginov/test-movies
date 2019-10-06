import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListConfig } from '../movie-list.config';
import { IMovieListColumn } from 'src/app/interfaces';
import { UserSettingsService } from 'src/app/services/user-settings.service';

@Injectable()
export class MovieListService {
  constructor(
    private http: HttpClient,
    private moduleCongif: MovieListConfig,
    private userSettingsService: UserSettingsService,
  ) {}

  getList() {
    return this.http.get(this.moduleCongif.api.getMovieList);
  }

  searchMovies(query: string, page: number = 1) {
    return this.http.get(`${this.moduleCongif.api.searchMoviesUrl}?query=${query}&page=${page}`, { observe: 'body' });
  }

  getColumns() {
    const defaultColumns: IMovieListColumn[] = [
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
        selected: false,
      },
      {
        id: 'popularity',
        name: 'Popularity',
        selected: true,
      },
      {
        id: 'overview',
        name: 'Overview',
        selected: true,
      },
    ];
    const selectedColumnIdsSettings = this.userSettingsService.selectedColumnIds;

    if (selectedColumnIdsSettings) {
      return Promise.resolve(defaultColumns.map((column) => ({
        ...column,
        selected: selectedColumnIdsSettings.includes(column.id),
      })));
    } else {
      return Promise.resolve(defaultColumns);
    }
  }
}
