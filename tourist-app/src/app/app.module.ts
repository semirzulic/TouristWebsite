import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/components-history/history/history.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NavbarComponent } from './components-home/navbar/navbar.component';
import { SliderComponent } from './components-home/slider/slider.component';
import { FooterComponent } from './components-home/footer/footer.component';
import { PopularComponent } from './components-home/popular/popular.component';
import { GaleryComponent } from './components-home/galery/galery.component';
import { ContactComponent } from './components-home/contact/contact.component';
import { AttractionsComponent } from './sights-components/attractions/attractions.component';
import { MapAttractionsComponent } from './sights-components/map-attractions/map-attractions.component';
import { SocialComponent } from './components-home/social/social.component';
import { AppRoutingModule } from './app-routing.module';

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
    MapAttractionsComponent,

    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
