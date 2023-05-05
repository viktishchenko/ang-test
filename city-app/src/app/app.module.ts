import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HousingLocationComponent } from './views/housing-location/housing-location.component';
import { DetailsComponent } from './views/details/details.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HousingLocationComponent, DetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
