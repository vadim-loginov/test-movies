import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './common/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movies',
  },
  {
    path: 'favourites',
    loadChildren: './feature/favourite-movies/favourite-movies.module#FavouriteMoviesModule',
  },
  {
    path: 'movies/:id',
    loadChildren: './feature/movie-details/movie-details.module#MovieDetailsModule',
  },
  {
    path: 'movies',
    loadChildren: './feature/movie-list/movie-list.module#MovieListModule',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
