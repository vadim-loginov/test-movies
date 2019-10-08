import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieListConfig } from '../movie-list.config';
import { IMovieListColumn, IGenre } from 'src/app/interfaces';
import { UserSettingsService } from 'src/app/services/user-settings.service';
import { Observable } from 'rxjs';

@Injectable()
export class MovieListService {
  private initialized = false;

  genres = null;
  genreIdNameMap = {};

  constructor(
    private http: HttpClient,
    private movieListCongif: MovieListConfig,
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
    return this.http.get(`${this.movieListCongif.api.searchMoviesUrl}?query=${query}&page=${page}`);
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
    return this.http.get(this.movieListCongif.api.getGenres).toPromise()
      .then((resp: any) => {
        this.genres = resp.genres;

        this.genres.forEach((genre) => {
          this.genreIdNameMap[genre.id] = genre.name;
        });
      });
  }
}
