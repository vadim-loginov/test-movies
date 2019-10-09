import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from 'src/app/services/user-settings.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.sass']
})
export class FavouriteMoviesComponent implements OnInit {
  favourites = [];

  constructor(
    private userSettings: UserSettingsService,
  ) { }

  ngOnInit() {
    const savedTags = this.userSettings.movieTags;

    this.favourites = Object.keys(savedTags).map((movieId) => ({
      ...savedTags[movieId],
      tags: savedTags[movieId].tags.join(', '),
    }));
    console.log('this.favourites', this.favourites);
  }

}
