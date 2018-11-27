import 'core-js/es6/reflect';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { enableProdMode, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DemoModule } from './app/events/module';
import { DemoComponent } from './app/events/component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule
  ],
  bootstrap: [DemoComponent]
})
export class BootstrapModule {}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
