import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';;
import { AirportComponent } from './component-transport/transport/airport/airport.component';

import { RentACarComponent } from './component-transport/transport/rent-a-car/rent-a-car.component';
import { TaxiComponent } from './component-transport/transport/taxi/taxi.component';
import { PublictransportComponent } from './component-transport/transport/publictransport/publictransport.component';
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
import { Tour360Component } from './virtual-tour/tour360/tour360.component';
import { CityMapComponent } from './virtual-tour/city-map/city-map.component';

import { SocialComponent } from './components-home/social/social.component';
import { AppRoutingModule } from './app-routing.module';
import { NextbikeComponent } from './component-transport/transport/nextbike/nextbike.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    PopularComponent,
    GaleryComponent,
    ContactComponent,
    AirportComponent,
    RentACarComponent,
    TaxiComponent,
    PublictransportComponent,
    HotelsComponent,
    RestaurantsComponent,
    AttractionsComponent,
    MapAttractionsComponent,
    Tour360Component,
    CityMapComponent,
    SocialComponent,
    NextbikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
