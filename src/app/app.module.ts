import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { MovieListModule } from './feature-modules//movie-list/movie-list.module';
import { MovieDetailsModule } from './feature-modules/movie-details/movie-details.module';
import { FavouriteMoviesModule } from './feature-modules/favourite-movies/favourite-movies.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,

    MovieListModule,
    MovieDetailsModule,
    FavouriteMoviesModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
