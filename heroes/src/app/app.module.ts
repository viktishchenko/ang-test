import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
