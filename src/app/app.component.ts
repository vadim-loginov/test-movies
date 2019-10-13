import { Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MediaMatcherService } from './common/services/media-matcher.service';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { LocaleService } from './common/services/locale.service';
import { CommonTranslations } from './common/locale/common.translations';

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
      title: 'header.nav.home',
      link: '/movies',
    },
    {
      title: 'header.nav.favourites',
      link: '/favourites',
    }
  ];

  constructor(
    private mediaMatcherService: MediaMatcherService,
    private localeService: LocaleService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    commmonTranslations: CommonTranslations,
  ) {
    iconRegistry.addSvgIcon('flag-ru', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/flag-ru.svg'));
    iconRegistry.addSvgIcon('flag-us', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/flag-us.svg'));
    iconRegistry.addSvgIcon('github-logo', sanitizer.bypassSecurityTrustResourceUrl('assets/svg/github-logo.svg'));

    localeService.addTranslations('ru', commmonTranslations.ru);
    localeService.addTranslations('en', commmonTranslations.en);
  }

  ngOnInit() {
    // const loadingModules = [];

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

  setLanguage(lang) {
    this.localeService.setLanguage(lang);
  }
}
