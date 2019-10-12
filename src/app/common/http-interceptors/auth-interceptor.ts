import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private appConfig: AppConfig,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const prefix = this.appConfig.movieDbApiPrefix;
    let reqWithProperUrl = req;

    if (req.url.slice(0, prefix.length) === prefix) {
      const apiKeySeparator = req.url.includes('?') ? '&' : '?';

      reqWithProperUrl = req.clone({
        url: req.url + apiKeySeparator + this.appConfig.movieDbApiKey,
      });
    }

    return next.handle(reqWithProperUrl);
  }
}
