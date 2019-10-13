import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { intersection } from 'lodash';

import { UserSettingsService } from 'src/app/common/services/user-settings.service';
import { TagsService } from 'src/app/common/services/common-tags.service';
import { IFavouriteMovie } from 'src/app/common/interfaces';
import { FavouriteMoviesTranslations } from '../../locale/favourite-movies.translations';
import { LocaleService } from 'src/app/common/services/locale.service';

@Component({
  selector: 'app-favourite-movies',
  templateUrl: './favourite-movies.component.html',
  styleUrls: ['./favourite-movies.component.sass']
})
export class FavouriteMoviesComponent implements OnInit {
  tagsControl = new FormControl();
  originalFavourites: IFavouriteMovie[] = [];
  favourites: IFavouriteMovie[] = [];
  userTags: string[] = [];

  constructor(
    private userSettings: UserSettingsService,
    private tagsService: TagsService,
    favouritesTranslations: FavouriteMoviesTranslations,
    localeService: LocaleService,
  ) {
    localeService.addTranslations('ru', favouritesTranslations.ru);
    localeService.addTranslations('en', favouritesTranslations.en);
  }

  ngOnInit() {
    const savedTags = this.userSettings.movieTags;

    if (savedTags) {
      this.originalFavourites = Object.keys(savedTags).map((movieId) => ({
        ...savedTags[movieId],
        tagArray: savedTags[movieId].tags.slice(),
        tags: savedTags[movieId].tags.join(', '),
      }));
    }

    this.tagsService.getUserTags().then((userTags) => {
      const tagsInFilter = this.userSettings.favouritesSavedTagFilter || [];

      this.userTags = userTags;
      this.tagsControl.setValue(tagsInFilter);
      this.favourites = this.filterFavourites(tagsInFilter);
    });
  }

  tagsSelectionChange(event: MatSelectChange) {
    this.favourites = this.filterFavourites(event.value);
    this.userSettings.favouritesSavedTagFilter = event.value;
  }

  filterFavourites(selectedTags: string[]): IFavouriteMovie[]  {
    if (!selectedTags.length) {
      return this.originalFavourites.slice();
    }

    return this.originalFavourites.filter(
      (favourite) => intersection(favourite.tagArray, selectedTags).length === selectedTags.length
    );
  }
}
