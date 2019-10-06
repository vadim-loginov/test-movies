import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {
  private settings;

  get(settingName) {
    const savedSettings = localStorage.getItem('userSettings');

    if (savedSettings === null) {
      return null;
    }

    return JSON.parse(savedSettings)[settingName];
  }

  save(settingName, data) {
    const savedSettings = localStorage.getItem('userSettings');
    const savedSettingsObject = savedSettings === null ? {} : JSON.parse(savedSettings);

    savedSettingsObject[settingName] = data;
    localStorage.setItem('userSettings', JSON.stringify(savedSettingsObject));
  }
}
