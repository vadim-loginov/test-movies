import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MovieListRoutingModule } from './movie-list-routing.module';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListService } from './services/movie-list.service';
import { MovieListFilterComponent } from './components/movie-list-filter/movie-list-filter.component';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListConfig } from './movie-list.config';
import { httpInterceptorProviders } from 'src/app/services/http-interceptors/http-interceptors';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieListFilterComponent,
  ],
  imports: [
    CommonModule,
    MovieListRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieListService,
    MovieListConfig,
    httpInterceptorProviders,
  ]
})
export class MovieListModule { }
