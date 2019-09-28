import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieDetailsComponent } from './feature-modules/movie-details/components/movie-details/movie-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieListComponent } from './feature-modules/movie-list/components/movie-list/movie-list.component';
import { FavouriteMoviesComponent } from './feature-modules/favourite-movies/components/favourite-movies/favourite-movies.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movies',
  },
  {
    path: 'movies',
    component: MovieListComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'favourites',
    component: FavouriteMoviesComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
