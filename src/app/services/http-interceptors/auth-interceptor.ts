import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiKey = 'api_key=2cdb1b1199194ebc0348f30796fa41c8';
    const apiKeySeparator = req.url.includes('?') ? '&' : '?';

    const reqWithProperUrl = req.clone({
      url: req.url + apiKeySeparator + apiKey,
    });

    return next.handle(reqWithProperUrl);
  }
}
