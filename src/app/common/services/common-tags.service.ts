import { Injectable } from '@angular/core';
import { UserSettingsService } from 'src/app/common/services/user-settings.service';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private userTags: string[];

  constructor(
    private userSettings: UserSettingsService,
  ) {}

  getUserTags(): Promise<string[]> {
    this.userTags = this.userTags || this.userSettings.userTags;

    return Promise.resolve(this.userTags || []);
  }

  addUserTag(tag) {
    this.userTags = this.userTags || [];

    if (this.userTags.indexOf(tag) < 0) {
      this.userTags.push(tag);
      this.userSettings.userTags = this.userTags;
    }
  }
}
