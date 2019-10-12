import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

@Injectable()
export class AppendPrefixUrlInterceptor implements HttpInterceptor {
  constructor(
    private appConfig: AppConfig
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const marker = this.appConfig.movieDbApiMarker;
    let reqWithProperUrl = req;

    if (req.url.slice(0, marker.length) === marker) {
      reqWithProperUrl = req.clone({
        url: this.appConfig.movieDbApiPrefix + req.url.slice(marker.length),
      });
    }

    return next.handle(reqWithProperUrl);
  }
}
