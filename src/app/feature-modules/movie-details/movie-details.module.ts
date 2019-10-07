import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/angular-material.module';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsConfig } from './movie-details.config';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from 'src/app/services/http-interceptors/http-interceptors';

@NgModule({
  declarations: [
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MovieDetailsRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MovieService,
    MovieDetailsConfig,
    httpInterceptorProviders,
  ]
})
export class MovieDetailsModule { }
