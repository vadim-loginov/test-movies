import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MovieListService } from '../../services/movie-list.service';
import { IMovieSearchResult, IFilterColumn } from 'src/app/interfaces';
import { PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';

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
  columns: IFilterColumn[];
  selectedColumns: string[];

  constructor(
    private movieListService: MovieListService,
  ) { }

  ngOnInit() {
    this.movieListService.getList().subscribe(
      (data) => {
        console.log(data);
      }
    );
    this.movieListService.getFilterColumns()
      .then((columns) => {
        this.columns = columns;
      });
  }

  onFilterSearch(e) {
    this.lastQuery = e.query;
    const searchResult: IMovieSearchResult = e.searchResult;

    console.log('searchResult', searchResult);
    this.movieList = searchResult.results;
    this.totalMovies = searchResult.total_results;
  }

  onFilterColumnsSelectionChange(event: MatSelectChange) {
    this.columns = event.value;
  }

  onPaginatorChange(page: PageEvent) {
    this.movieListService.searchMovies(this.lastQuery, page.pageIndex + 1)
      .subscribe((searchResult: IMovieSearchResult) => {
        this.movieList = searchResult.results;
        this.totalMovies = searchResult.total_results;
      });
  }
}
