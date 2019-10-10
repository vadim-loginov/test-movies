import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovieListColumn, IMovie } from 'src/app/common/interfaces';
import { MatSelectChange } from '@angular/material/select';
import { UserSettingsService } from 'src/app/common/services/user-settings.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class MovieListComponent {
  @Input() movieList: IMovie[];
  @Input() columns: IMovieListColumn[];

  constructor(
    private moviesService: MoviesService,
  ) { }

  getSelectedColumns() {
    return this.columns ? this.columns.filter(column => column.selected) : [];
  }

  isColumnSelected(columnId): boolean {
    const column = this.columns.find(col => col.id === columnId);

    return column.selected;
  }

  genresToNames(genreIds) {
    return genreIds.map((genreId) => this.moviesService.genreIdNameMap[genreId]);
  }
}
