import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { MovieListRoutingModule } from './movie-list-routing.module';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './services/movies.service';
import { MoviesFilterComponent } from './components/movies-filter/movies-filter.component';
import { MoviesConfig } from './movies.config';


@NgModule({
  declarations: [
    MovieListComponent,
    MoviesFilterComponent,
  ],
  imports: [
    AppCommonModule,
    MovieListRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService,
    MoviesConfig,
  ]
})
export class MoviesModule { }
