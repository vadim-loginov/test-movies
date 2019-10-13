import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialModule } from 'src/app/angular-material.module';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { AppCommonModule } from 'src/app/common/app-common.module';

import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';
import { MovieDetailsConfig } from './movie-details.config';
import { MovieTagsComponent } from './components/movie-tags/movie-tags.component';
import { MovieDetailsTranslations } from './locale/movie-details.translations';

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
    ReactiveFormsModule,
  ],
  providers: [
    MovieService,
    MovieDetailsConfig,
    MovieDetailsTranslations,
  ]
})
export class MovieDetailsModule { }
