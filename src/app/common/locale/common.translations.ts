import { Injectable } from '@angular/core';
import { ITranslations } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommonTranslations implements ITranslations {
  ru = new Map([
    ['header.title', 'Фильмы'],
    ['header.nav.favourites', 'Избранное'],
    ['header.nav.home', 'Главная'],
    ['header.github.title', 'Открыть репозиторий проекта на GitHub'],
  ]);
  en = new Map([
    ['header.title', 'Movies'],
    ['header.nav.favourites', 'Favourites'],
    ['header.nav.home', 'Home'],
    ['header.github.title', 'Go to project repository on GitHub'],
  ]);
}
