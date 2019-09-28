import { Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcherService } from './services/media-matcher/media-matcher.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnDestroy {
  @ViewChild('sidenav', { static: false }) sidenav;

  mobileQuerySubscription: Subscription;
  isMobile: boolean;

  mainMenuLinks = [
    {
      title: 'Home',
      link: '/movies',
    },
    {
      title: 'Favorite movies',
      link: '/favourites',
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
