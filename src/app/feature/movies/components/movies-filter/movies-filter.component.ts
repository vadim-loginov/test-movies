import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { MoviesService } from '../../services/movies.service';
import { IMovieSearchResult } from 'src/app/common/interfaces';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-movies-filter',
  templateUrl: './movies-filter.component.html',
  styleUrls: ['./movies-filter.component.sass']
})
export class MoviesFilterComponent implements OnInit, OnChanges {
  @Input() columns: string[];
  @Input() selectedColumns: string[];
  @Output() search = new EventEmitter<{ query: string, searchResult: IMovieSearchResult }>();
  @Output() columnsSelectionChange = new EventEmitter<MatSelectChange>();
  queryControl = new FormControl('');
  columnsControl = new FormControl('');

  constructor(
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
    this.queryControl.valueChanges
      .pipe(
        map(query => query ? query.trim() : query),
        filter(query => query !== undefined && query !== ''),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(query => this.moviesService.searchMovies(query))
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
