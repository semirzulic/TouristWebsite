import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopularComponent } from './components/popular/popular.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ContactComponent } from './components/contact/contact.component';
import { AirportComponent } from './components/component-transport/transport/airport/airport.component';
import { AppRoutingModule } from './app-routing.module';
import { RentACarComponent } from './components/component-transport/transport/rent-a-car/rent-a-car.component';
import { TaxiComponent } from './components/component-transport/transport/taxi/taxi.component';

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
    TaxiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
