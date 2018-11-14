import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components-home/navbar/navbar.component';
import { SliderComponent } from './components-home/slider/slider.component';
import { FooterComponent } from './components-home/footer/footer.component';
import { PopularComponent } from './components-home/popular/popular.component';
import { GaleryComponent } from './components-home/galery/galery.component';
import { ContactComponent } from './components-home/contact/contact.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';
import { SocialComponent } from './components-home/social/social.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    PopularComponent,
    GaleryComponent,
    ContactComponent,
    HotelsComponent,
    RestaurantsComponent,
    AttractionsComponent,
    MapAttractionsComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
