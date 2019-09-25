import { Injectable, EventEmitter } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MediaMatcherService {
  onMobileQueryChange: EventEmitter<MediaQueryListEvent>;
  mobileQuery: MediaQueryList;

  private mobileQueryListener: (MediaQueryListEvent) => void;
  private mobileBreakpoint = 600;

  constructor(media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(`(max-width: ${this.mobileBreakpoint}px)`);
    this.onMobileQueryChange =  new EventEmitter();

    this.mobileQueryListener = (evt: MediaQueryListEvent) => {
      this.onMobileQueryChange.emit(evt);
    };

    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }
}
