import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterPipe } from './pipes/poster.pipe';
import { httpInterceptorProviders } from './http-interceptors/http-interceptors';

@NgModule({
  declarations: [
    PosterPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PosterPipe,
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class AppCommonModule { }
