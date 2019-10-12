import { Injectable, ChangeDetectorRef } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { UserSettingsService } from './user-settings.service';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private translations = {
    ru: {
      'header.title': 'Фильмы',
      'header.nav.favourites': 'Избранное',
      'header.nav.home': 'Главная',
      'header.github.title': 'Открыть репозиторий проекта на GitHub',
      'movies.filter.search.placeholder': 'Поиск фильмов',
      'movies.list.columns.poster': 'Постер',
      'movies.list.columns.title': 'Название',
      'movies.list.columns.language': 'Язык',
      'movies.list.columns.release': 'Дата выхода',
      'movies.list.columns.genre': 'Жанр',
      'movies.list.columns.popularity': 'Популярность',
      'movies.list.columns.overview': 'Описание',
      'favourites.tag.placeholder': 'Фильтр тегов',
      'movie-details.tagline': 'Слоган',
      'movie-details.overview': 'Описание',
      'movie-details.release_date': 'Год',
      'movie-details.budget': 'Бюджет',
      'movie-details.revenue': 'Сборы в мире',
      'movie-tags.placeholder': 'Теги',
    },
    en: {
      'header.title': 'Movies',
      'header.nav.favourites': 'Favourites',
      'header.nav.home': 'Home',
      'header.github.title': 'Go to project repository on GitHub',
      'movies.filter.search.placeholder': 'Search for movies',
      'movies.list.columns.poster': 'Poster',
      'movies.list.columns.title': 'Title',
      'movies.list.columns.language': 'Lang',
      'movies.list.columns.release': 'Release date',
      'movies.list.columns.genre': 'Genre',
      'movies.list.columns.popularity': 'Popularity',
      'movies.list.columns.overview': 'Overview',
      'favourites.tag.placeholder': 'Tag filter',
      'movie-details.tagline': 'Tagline',
      'movie-details.overview': 'Overview',
      'movie-details.release_date': 'Release dated',
      'movie-details.budget': 'Budget',
      'movie-details.revenue': 'Revenue',
      'movie-tags.placeholder': 'Tags',
    },
  };

  currentLanguage: string;

  constructor(
    private appConfig: AppConfig,
    private userSettingsService: UserSettingsService,
  ) {
    this.currentLanguage = this.userSettingsService.userLanguage || this.appConfig.defaultLanguage;
  }

  translate(key) {
    if (key in this.translations[this.currentLanguage]) {
      return this.translations[this.currentLanguage][key];
    } else {
      return this.currentLanguage + '.' + key;
    }
  }

  setLanguage(lang) {
    if (lang in this.translations) {
      this.currentLanguage = lang;
      this.userSettingsService.userLanguage = lang;
    }
  }
}
