import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { httpInterceptorProviders } from './common/http-interceptors/http-interceptors';
import { AppConfig } from './app.config';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
  ],
  providers: [
    AppConfig,
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
