import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './views/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroDetailComponent } from './views/hero-detail/hero-detail.component';
import { MessagesComponent } from './views/messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './views/dashboard/dashboard.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
