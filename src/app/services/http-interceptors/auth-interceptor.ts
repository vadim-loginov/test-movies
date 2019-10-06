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
    const apiKeySeparator = req.url.includes('?') ? '&' : '?';

    const reqWithProperUrl = req.clone({
      url: req.url + apiKeySeparator + this.appConfig.movieDbApiKey,
    });

    return next.handle(reqWithProperUrl);
  }
}
