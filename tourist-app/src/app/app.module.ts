import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopularComponent } from './components/popular/popular.component';
import { GaleryComponent } from './components/galery/galery.component';
import { ContactComponent } from './components/contact/contact.component';
import { HistoryComponent } from './components/components-history/history/history.component';
import { AppRoutingModule } from './app-routing-history.module';
import { AttractionsComponent } from './components/components-attractions/attractions/attractions.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AgmCoreModule } from '@agm/core';
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
    AttractionsComponent,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
