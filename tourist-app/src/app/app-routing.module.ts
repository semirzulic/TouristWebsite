import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

import { MainHomeComponent } from './main-home/main-home.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';
import { NextbikeComponent } from './component-transport/transport/nextbike/nextbike.component';
import { Tour360Component } from './virtual-tour/tour360/tour360.component';
import { CityMapComponent } from './virtual-tour/city-map/city-map.component';
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';
import { HistoryComponent } from './history/components-history/history/history.component';
import { AttractionComponent } from './history/components-attractions/attractions/attraction.component';

import { AirportComponent } from './component-transport/transport/airport/airport.component';
import { RentACarComponent } from './component-transport/transport/rent-a-car/rent-a-car.component';
import { TaxiComponent } from './component-transport/transport/taxi/taxi.component';
import { PublictransportComponent } from './component-transport/transport/publictransport/publictransport.component';
import { GalleriesComponent } from './culture-componenets/galleries/galleries.component';
import { InternationalAtelierComponent } from './culture-componenets/international-atelier/international-atelier.component';
import { MuseumsComponent } from './culture-componenets/museums/museums.component';
import { InternationalPortraitComponent } from './culture-componenets/international-portrait/international-portrait.component';
import { EasterComponent } from './culture-componenets/easter/easter.component';


const routes: Routes = [
  {path: '', component: MainHomeComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'rentacar', component: RentACarComponent},
  {path: 'taxi', component: TaxiComponent},
  {path: 'publictransport', component: PublictransportComponent},
  {path: 'nextbike', component: NextbikeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'accomodation/hotels', component: HotelsComponent},
  {path: 'accomodation/hotels', component: HotelsComponent}, 
  {path: 'accomodation/restaurants', component: RestaurantsComponent},
  {path: 'virtual-tour/tour-360', component: Tour360Component},
  {path: 'virtual-tour/city-map', component: CityMapComponent},
  {path: 'sights/attractions', component: AttractionsComponent},
 {path: 'sights/map-attractions', component: MapAttractionsComponent},
  {path: 'sights/map-attractions', component: MapAttractionsComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'rentacar', component: RentACarComponent},
  {path: 'taxi', component: TaxiComponent},
  {path: 'publictransport', component: PublictransportComponent},
  {path: 'nextbike', component: NextbikeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'attraction', component: AttractionComponent},
  {path:'galleries',component:GalleriesComponent},
  {path:'international',component:InternationalAtelierComponent},
  {path:'portrait',component:InternationalPortraitComponent},
  {path:'museums',component:MuseumsComponent},
  {path:'museum',component:EasterComponent}

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
