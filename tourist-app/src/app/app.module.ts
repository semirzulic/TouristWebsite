import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components-home/navbar/navbar.component';
import { SliderComponent } from './components-home/slider/slider.component';
import { FooterComponent } from './components-home/footer/footer.component';
import { PopularComponent } from './components-home/popular/popular.component';
import { GaleryComponent } from './components-home/galery/galery.component';
import { ContactComponent } from './components-home/contact/contact.component';
import { SocialComponent } from './components-home/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    PopularComponent,
    GaleryComponent,
    ContactComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
