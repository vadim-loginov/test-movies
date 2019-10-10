import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcherService } from './common/services/media-matcher.service';
import { Subscription } from 'rxjs';
import { bus, BusEvent } from './common/services/bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav', { static: false }) sidenav;

  mobileQuerySubscription: Subscription;
  isMobile: boolean;
  loading: boolean;
  subscriptions: Subscription[] = [];

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
  ) {}

  ngOnInit() {
    const loadingModules = [];

    // Show loader while modules are loading
    // this.subscriptions.push(
    //   bus.subscribe((ev: BusEvent) => {
    //     if (ev.action === 'module-loading-start') {
    //       this.loading = true;
    //       loadingModules.push(ev.data);
    //     } else if (ev.action === 'module-loading-end') {
    //       const moduleIndex = loadingModules.indexOf(ev.data);

    //       if (moduleIndex !== -1) {
    //         loadingModules.splice(moduleIndex, 1);
    //       }

    //       if (!loadingModules.length) {
    //         this.loading = false;
    //       }
    //     }
    //   })
    // );

    this.subscriptions.push(
      this.mediaMatcherService.onMobileQueryChange
        .subscribe((evt: MediaQueryListEvent) => {
          this.isMobile = evt.matches;
        }),
    );

    this.isMobile = this.mediaMatcherService.mobileQuery.matches;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => { subscription.unsubscribe(); });
  }
}
