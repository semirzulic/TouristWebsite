import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/components-history/history/history.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';
import { Tour360Component } from './virtual-tour/tour360/tour360.component';
import { CityMapComponent } from './virtual-tour/city-map/city-map.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';
import { AttractionComponent  } from './history/components-attractions/attractions/attraction.component';
import { SocialComponent } from './components-home/social/social.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleriesComponent } from './culture-componenets/galleries/galleries.component';
import { InternationalAtelierComponent } from './culture-componenets/international-atelier/international-atelier.component';
import  {InternationalPortraitComponent} from './culture-componenets/international-portrait/international-portrait.component';
import { MuseumsComponent } from './culture-componenets/museums/museums.component';
import { EasterComponent } from './culture-componenets/easter/easter.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { NextbikeComponent } from './component-transport/transport/nextbike/nextbike.component';
import { AboutUsComponent } from './about/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    FooterComponent,
    PopularComponent,
    GaleryComponent,
    ContactComponent,
    HistoryComponent,
    AirportComponent,
    RentACarComponent,
    TaxiComponent,
    PublictransportComponent,
    HotelsComponent,
    RestaurantsComponent,
    AttractionsComponent,
    MapAttractionsComponent,
    SocialComponent,
    GalleriesComponent,
    InternationalAtelierComponent,
    InternationalPortraitComponent,
    MuseumsComponent,
    EasterComponent,
    Tour360Component,
    CityMapComponent,
    SocialComponent,
    MainHomeComponent,
    HotelsComponent,
    RestaurantsComponent,
    AttractionComponent,
<<<<<<< HEAD
    NextbikeComponent
=======


    NextbikeComponent,


    AboutUsComponent
>>>>>>> a0552b379eeb8f6b7ccb6d613c204821f92d8c25
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbModule.forRoot(),

  
    AngularFontAwesomeModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
