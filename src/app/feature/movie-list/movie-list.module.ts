import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { MovieListRoutingModule } from './movie-list-routing.module';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListService } from './services/movie-list.service';
import { MovieListFilterComponent } from './components/movie-list-filter/movie-list-filter.component';
import { MovieListConfig } from './movie-list.config';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieListFilterComponent,
  ],
  imports: [
    AppCommonModule,
    MovieListRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    MovieListService,
    MovieListConfig,
  ]
})
export class MovieListModule { }
