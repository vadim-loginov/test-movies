import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MovieListService } from '../../services/movie-list.service';

@Component({
  selector: 'app-movie-list-filter',
  templateUrl: './movie-list-filter.component.html',
  styleUrls: ['./movie-list-filter.component.sass']
})
export class MovieListFilterComponent implements OnInit {
  queryControl = new FormControl('');

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
      .subscribe((response: any) => {
        console.log(response);
        // console.log(response.results.map(movie => movie.original_title));
      });
  }

}
