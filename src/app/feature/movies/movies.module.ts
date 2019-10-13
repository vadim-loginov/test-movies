import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { MoviesRoutingModule } from './movies-routing.module';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MoviesService } from './services/movies.service';
import { MoviesFilterComponent } from './components/movies-filter/movies-filter.component';
import { MoviesConfig } from './movies.config';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesTranslations } from './locale/movies.translations';


@NgModule({
  declarations: [
    MovieListComponent,
    MoviesFilterComponent,
    MoviesComponent,
  ],
  imports: [
    AppCommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    MoviesService,
    MoviesConfig,
    MoviesTranslations,
  ]
})
export class MoviesModule { }
