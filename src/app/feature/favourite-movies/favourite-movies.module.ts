import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppCommonModule } from 'src/app/common/app-common.module';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FavouriteMoviesRoutingModule } from './favourite-movies-routing.module';

import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';
import { FavouriteMoviesTranslations } from './locale/favourite-movies.translations';


@NgModule({
  declarations: [
    FavouriteMoviesComponent,
  ],
  imports: [
    AppCommonModule,
    FavouriteMoviesRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    FavouriteMoviesTranslations,
  ]
})
export class FavouriteMoviesModule { }
