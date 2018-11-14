import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainHomeComponent } from './main-home/main-home.component';
import { HotelsComponent } from './accomodation-components/hotels/hotels.component';
import { RestaurantsComponent } from './accomodation-components/restaurants/restaurants.component';






const routes: Routes = [
  {path: '', component: MainHomeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'restaurants', component: RestaurantsComponent}

];

@NgModule({

  exports: [RouterModule],
  
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
