import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';


@NgModule({
  declarations: [
    MovieListComponent,
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
  ]
})
export class MovieListModule { }
