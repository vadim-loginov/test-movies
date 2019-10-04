import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AppendPrefixUrlInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiPrefix = 'https://api.themoviedb.org/3/';

    const reqWithProperUrl = req.clone({
      url: apiPrefix + req.url,
    });

    return next.handle(reqWithProperUrl);
  }
}
