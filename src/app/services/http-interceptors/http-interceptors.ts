import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppendPrefixUrlInterceptor } from './append-prefix-url-interceptor';
import { AuthInterceptor } from './auth-interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AppendPrefixUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
