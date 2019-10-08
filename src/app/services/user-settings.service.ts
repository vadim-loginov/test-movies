import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private settings;

  get selectedColumnIds() { return this.get('selectedColumnIds'); }
  set selectedColumnIds(data) { this.save('selectedColumnIds', data); }

  get movieTags() { return this.get('movieTags'); }
  set movieTags(data) { this.save('movieTags', data); }

  get userTags() { return this.get('userTags'); }
  set userTags(data) { this.save('userTags', data); }

  private get(settingName) {
    const savedSettings = localStorage.getItem('userSettings');

    if (savedSettings === null) {
      return null;
    }

    return JSON.parse(savedSettings)[settingName];
  }

  private save(settingName, data) {
    const savedSettings = localStorage.getItem('userSettings');
    const savedSettingsObject = savedSettings === null ? {} : JSON.parse(savedSettings);

    savedSettingsObject[settingName] = data;
    localStorage.setItem('userSettings', JSON.stringify(savedSettingsObject));
  }
}
