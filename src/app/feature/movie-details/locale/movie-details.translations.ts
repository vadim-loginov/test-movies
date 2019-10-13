import { Injectable } from '@angular/core';
import { ITranslations } from 'src/app/common/interfaces';

@Injectable()
export class MovieDetailsTranslations implements ITranslations {
  ru = new Map([
    ['movie-details.tagline', 'Слоган'],
    ['movie-details.overview', 'Описание'],
    ['movie-details.release_date', 'Год'],
    ['movie-details.budget', 'Бюджет'],
    ['movie-details.revenue', 'Сборы в мире'],
    ['movie-details.movie-tags.placeholder', 'Теги'],
  ]);
  en = new Map([
    ['movie-details.tagline', 'Tagline'],
    ['movie-details.overview', 'Overview'],
    ['movie-details.release_date', 'Release dated'],
    ['movie-details.budget', 'Budget'],
    ['movie-details.revenue', 'Revenue'],
    ['movie-details.movie-tags.placeholder', 'Tags'],
  ]);
}
