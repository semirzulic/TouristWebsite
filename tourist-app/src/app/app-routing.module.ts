import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';
import { Tour360Component } from './virtual-tour/tour360/tour360.component';
import { CityMapComponent } from './virtual-tour/city-map/city-map.component';
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';






const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'accomodation/hotels', component: HotelsComponent},
  {path: 'accomodation/restaurants', component: RestaurantsComponent},
  {path: 'virtual-tour/tour-360', component: Tour360Component},
  {path: 'virtual-tour/city-map', component: CityMapComponent},
  {path: 'sights/attractions', component: AttractionsComponent},
  {path: 'sights/map-attractions', component: MapAttractionsComponent}

];

@NgModule({

  exports: [RouterModule],
  
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
