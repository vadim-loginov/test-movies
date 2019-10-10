import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { MovieListService } from '../../services/movie-list.service';
import { IMovieSearchResult } from 'src/app/common/interfaces';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-movie-list-filter',
  templateUrl: './movie-list-filter.component.html',
  styleUrls: ['./movie-list-filter.component.sass']
})
export class MovieListFilterComponent implements OnInit, OnChanges {
  @Input() columns: string[];
  @Input() selectedColumns: string[];
  @Output() search = new EventEmitter<{ query: string, searchResult: IMovieSearchResult }>();
  @Output() columnsSelectionChange = new EventEmitter<MatSelectChange>();
  queryControl = new FormControl('');
  columnsControl = new FormControl('');

  constructor(
    private movieListService: MovieListService,
  ) { }

  ngOnInit() {
    this.queryControl.valueChanges
      .pipe(
        map(query => query ? query.trim() : query),
        filter(query => query !== undefined && query !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(query => this.movieListService.searchMovies(query))
      )
      .subscribe((searchResult: IMovieSearchResult) => {
        this.search.emit({
          query: this.queryControl.value,
          searchResult,
        });
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.columnsControl.setValue(this.selectedColumns);
  }
}
