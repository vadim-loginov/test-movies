import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcherService } from './services/media-matcher/media-matcher.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav', { static: false }) sidenav;

  mobileQuerySubscription: Subscription;
  isMobile: boolean;

  mainMenuLinks = [
    {
      title: 'Home',
    },
    {
      title: 'Favorite books'
    }
  ];

  constructor(
    private mediaMatcherService: MediaMatcherService,
  ) {
    this.mobileQuerySubscription = this.mediaMatcherService.onMobileQueryChange
      .subscribe((evt: MediaQueryListEvent) => {
        this.isMobile = evt.matches;
      });

    this.isMobile = this.mediaMatcherService.mobileQuery.matches;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  ngOnDestroy() {
    this.mobileQuerySubscription.unsubscribe();
  }
}
