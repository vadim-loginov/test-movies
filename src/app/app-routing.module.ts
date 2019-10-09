import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { bus } from './common/services/bus.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movies',
  },
  {
    path: 'favourites',
    loadChildren: () => {
      bus.emit({
        action: 'module-loading-start',
        data: 'FavouriteMoviesModule',
      });

      return import('./feature-modules/favourite-movies/favourite-movies.module')
        .then(mod => mod.FavouriteMoviesModule)
        .finally(() => {
          bus.emit({
            action: 'module-loading-end',
            data: 'FavouriteMoviesModule',
          });
        });
    },
  },
  {
    path: 'movies/:id',
    loadChildren: () => {
      bus.emit({
        action: 'module-loading-start',
        data: 'MovieDetailsModule',
      });

      return import('./feature-modules/movie-details/movie-details.module')
        .then(mod => mod.MovieDetailsModule)
        .finally(() => {
          bus.emit({
            action: 'module-loading-end',
            data: 'MovieDetailsModule',
          });
        });
    },
  },
  {
    path: 'movies',
    loadChildren: () => {
      bus.emit({
        action: 'module-loading-start',
        data: 'MovieListModule',
      });

      return import('./feature-modules/movie-list/movie-list.module')
        .then(mod => mod.MovieListModule)
        .finally(() => {
          bus.emit({
            action: 'module-loading-end',
            data: 'MovieListModule',
          });
        });
    },
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
      // preloadingStrategy: PreloadAllModules,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
