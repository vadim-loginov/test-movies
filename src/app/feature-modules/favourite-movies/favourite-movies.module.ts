import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteMoviesRoutingModule } from './favourite-movies-routing.module';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';


@NgModule({
  declarations: [
    FavouriteMoviesComponent,
  ],
  imports: [
    CommonModule,
    FavouriteMoviesRoutingModule
  ]
})
export class FavouriteMoviesModule { }
