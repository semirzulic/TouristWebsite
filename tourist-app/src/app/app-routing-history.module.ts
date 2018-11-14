import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HistoryComponent } from './components/components-history/history/history.component';
import { AttractionsComponent } from './components/components-attractions/attractions/attractions.component';


const routes: Routes = [

  {path: 'history', component: HistoryComponent},
  {path: 'attractions', component: AttractionsComponent},

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