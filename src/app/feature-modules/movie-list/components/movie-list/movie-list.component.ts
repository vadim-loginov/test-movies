import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { IMovieSearchResult, IMovieListColumn } from 'src/app/common/interfaces';
import { PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { UserSettingsService } from 'src/app/common/services/user-settings.service';

interface Movie {
  title: string;
  id: number;
}

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  totalMovies: number;
  pageSize = 20;
  lastQuery: string;
  columns: IMovieListColumn[];
  columnNames: string[];
  selectedColumnNames: string[];

  constructor(
    private movieListService: MovieListService,
    private userSettingsService: UserSettingsService,
  ) { }

  ngOnInit() {
    this.movieListService.init()
      .then(() => {
        this.columns = this.movieListService.getColumns();
        this.columnNames = this.getColumnNames();
        this.selectedColumnNames = this.getSelectedColumnNames();
      });
  }

  onFilterSearch(e) {
    this.lastQuery = e.query;
    const searchResult: IMovieSearchResult = e.searchResult;

    this.movieList = searchResult.results;
    this.totalMovies = searchResult.total_results;
  }

  onFilterColumnsSelectionChange(event: MatSelectChange) {
    this.columns = this.columns.map((column) => {
      column.selected = event.value.includes(column.name);
      return column;
    });

    this.userSettingsService.selectedColumnIds = this.getSelectedColumnIds();
  }

  onPaginatorChange(page: PageEvent) {
    this.movieListService.searchMovies(this.lastQuery, page.pageIndex + 1)
      .subscribe((searchResult: IMovieSearchResult) => {
        this.movieList = searchResult.results;
        this.totalMovies = searchResult.total_results;
      });
  }

  getSelectedColumns() {
    return this.columns ? this.columns.filter(column => column.selected) : [];
  }

  getColumnNames() {
    return this.columns ? this.columns.map(column => column.name) : [];
  }

  getSelectedColumnNames() {
    const reducer = (acc, curr) => acc.concat(curr.selected ? [curr.name] : []);

    return this.columns ? this.columns.reduce(reducer, []) : [];
  }

  getSelectedColumnIds() {
    const reducer = (acc, curr) => acc.concat(curr.selected ? [curr.id] : []);

    return this.columns ? this.columns.reduce(reducer, []) : [];
  }

  isColumnSelected(columnId): boolean {
    const column = this.columns.find(col => col.id === columnId);

    return column.selected;
  }

  genresToNames(genreIds) {
    return genreIds.map((genreId) => this.movieListService.genreIdNameMap[genreId]);
  }
}
