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
    const reqWithProperUrl = req.clone({
      // url: this.appConfig.movieDbApiPrefix + req.url,
    });

    return next.handle(reqWithProperUrl);
  }
}
