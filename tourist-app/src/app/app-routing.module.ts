import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AirportComponent } from './components/component-transport/transport/airport/airport.component';
import { RentACarComponent } from './components/component-transport/transport/rent-a-car/rent-a-car.component';
import { TaxiComponent } from './components/component-transport/transport/taxi/taxi.component';
import { PublictransportComponent } from './components/component-transport/transport/publictransport/publictransport.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'airports', component: AirportComponent},
  {path: 'rentacar', component: RentACarComponent},
  {path: 'taxi', component: TaxiComponent},
  {path: 'publictransport', component: PublictransportComponent}
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
