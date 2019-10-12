import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosterPipe } from './pipes/poster.pipe';
import { httpInterceptorProviders } from './http-interceptors/http-interceptors';
import { TranslatePipe } from './pipes/translate.pipe';

@NgModule({
  declarations: [
    PosterPipe,
    TranslatePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    PosterPipe,
    TranslatePipe,
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class AppCommonModule { }
