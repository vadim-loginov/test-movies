import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/angular-material.module';

import { MovieDetailsRoutingModule } from './movie-details-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieService } from './services/movie.service';

@NgModule({
  declarations: [
    MovieDetailsComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MovieDetailsRoutingModule
  ],
  providers: [
    MovieService,
  ]
})
export class MovieDetailsModule { }
