import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteMoviesComponent } from './components/favourite-movies/favourite-movies.component';


const routes: Routes = [
  {
    path: 'favourites',
    component: FavouriteMoviesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteMoviesRoutingModule { }
