import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesConfig } from '../movies.config';
import { IMovieListColumn, IGenre } from 'src/app/common/interfaces';
import { UserSettingsService } from 'src/app/common/services/user-settings.service';

@Injectable()
export class MoviesService {
  private initialized = false;

  genres = null;
  genreIdNameMap = {};

  constructor(
    private http: HttpClient,
    private moviesCongif: MoviesConfig,
    private userSettingsService: UserSettingsService,
  ) {}

  init(): Promise<any> {
    if (this.initialized) {
      return Promise.resolve();
    }

    return this.getGenres()
      .then((e) => {
        this.initialized = true;
      });
  }

  searchMovies(query: string, page: number = 1) {
    return this.http.get(`${this.moviesCongif.api.searchMoviesUrl}?query=${query}&page=${page}`);
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
      return defaultColumns.map((column) => ({
        ...column,
        selected: selectedColumnIdsSettings.includes(column.id),
      }));
    } else {
      return defaultColumns;
    }
  }

  private getGenres() {
    return this.http.get(this.moviesCongif.api.getGenres).toPromise()
      .then((resp: any) => {
        this.genres = resp.genres;

        this.genres.forEach((genre) => {
          this.genreIdNameMap[genre.id] = genre.name;
        });
      });
  }
}
