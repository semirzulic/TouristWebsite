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

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'rentacar', component: RentACarComponent},
  {path: 'taxi', component: TaxiComponent},
  {path: 'publictransport', component: PublictransportComponent},
  {path: 'nextbike', component: NextbikeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurants', component: RestaurantsComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
