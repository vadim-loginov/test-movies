import { Injectable } from '@angular/core';
import { ITranslations } from 'src/app/common/interfaces';

@Injectable()
export class FavouriteMoviesTranslations implements ITranslations {
  ru = new Map([
    ['favourites.tag.placeholder', 'Фильтр тегов'],
  ]);
  en = new Map([
    ['favourites.tag.placeholder', 'Tag filter'],
  ]);
}
