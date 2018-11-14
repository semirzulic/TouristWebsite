import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AirportComponent } from './component-transport/transport/airport/airport.component';
import { RentACarComponent } from './component-transport/transport/rent-a-car/rent-a-car.component';
import { TaxiComponent } from './component-transport/transport/taxi/taxi.component';
import { PublictransportComponent } from './component-transport/transport/publictransport/publictransport.component';
import { AppComponent } from './app.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';
import { NextbikeComponent } from './component-transport/transport/nextbike/nextbike.component';
import { Tour360Component } from './virtual-tour/tour360/tour360.component';
import { CityMapComponent } from './virtual-tour/city-map/city-map.component';
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'rentacar', component: RentACarComponent},
  {path: 'taxi', component: TaxiComponent},
  {path: 'publictransport', component: PublictransportComponent},
  {path: 'nextbike', component: NextbikeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'accomodation/hotels', component: HotelsComponent},
  {path: 'accomodation/restaurants', component: RestaurantsComponent},
  {path: 'virtual-tour/tour-360', component: Tour360Component},
  {path: 'virtual-tour/city-map', component: CityMapComponent},
  {path: 'sights/attractions', component: AttractionsComponent},
  {path: 'sights/map-attractions', component: MapAttractionsComponent}
]



@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
