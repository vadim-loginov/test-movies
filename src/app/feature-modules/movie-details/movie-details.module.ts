import { NgModule } from '@angular/core';

import { AngularMaterialModule } from 'src/app/angular-material.module';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsConfig } from './movie-details.config';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from 'src/app/services/http-interceptors/http-interceptors';
import { AppCommonModule } from 'src/app/common/app-common.module';
import { MovieTagsComponent } from './components/movie-tags/movie-tags.component';

@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieTagsComponent,
  ],
  imports: [
    AppCommonModule,
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
