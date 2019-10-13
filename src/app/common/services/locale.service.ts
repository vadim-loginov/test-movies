import { Injectable } from '@angular/core';
import { AppConfig } from 'src/app/app.config';
import { UserSettingsService } from './user-settings.service';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {
  private ru = new Map();
  private en = new Map();

  currentLanguage: string;

  constructor(
    private appConfig: AppConfig,
    private userSettingsService: UserSettingsService,
  ) {
    this.currentLanguage = this.userSettingsService.userLanguage || this.appConfig.defaultLanguage;
  }

  translate(key) {
    const translations = this[this.currentLanguage] as Map<string, string>;

    if (translations.has(key)) {
      return translations.get(key);
    } else {
      return this.currentLanguage + '.' + key;
    }
  }

  setLanguage(lang) {
    if (lang in this) {
      this.currentLanguage = lang;
      this.userSettingsService.userLanguage = lang;
    }
  }

  addTranslations(locale: string, translations: Map<string, string>) {
    translations.forEach((value, key) => {
      (this[locale] as Map<string, string>).set(key, value);
    });
  }
}
