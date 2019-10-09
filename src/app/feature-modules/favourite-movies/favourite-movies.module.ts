import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteMoviesRoutingModule } from './favourite-movies-routing.module';
import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FavouriteMoviesComponent,
  ],
  imports: [
    CommonModule,
    FavouriteMoviesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ]
})
export class FavouriteMoviesModule { }
