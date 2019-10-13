import { Injectable } from '@angular/core';
import { ITranslations } from 'src/app/common/interfaces';

@Injectable()
export class MoviesTranslations implements ITranslations {
  ru = new Map([
    ['movies.filter.search.placeholder', 'Поиск фильмов'],
    ['movies.list.columns.poster', 'Постер'],
    ['movies.list.columns.title', 'Название'],
    ['movies.list.columns.language', 'Язык'],
    ['movies.list.columns.release', 'Дата выхода'],
    ['movies.list.columns.genre', 'Жанр'],
    ['movies.list.columns.popularity', 'Популярность'],
    ['movies.list.columns.overview', 'Описание'],
  ]);
  en = new Map([
    ['movies.filter.search.placeholder', 'Search for movies'],
    ['movies.list.columns.poster', 'Poster'],
    ['movies.list.columns.title', 'Title'],
    ['movies.list.columns.language', 'Lang'],
    ['movies.list.columns.release', 'Release date'],
    ['movies.list.columns.genre', 'Genre'],
    ['movies.list.columns.popularity', 'Popularity'],
    ['movies.list.columns.overview', 'Overview'],
  ]);
}
