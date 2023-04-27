import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopBarComponent } from './views/top-bar/top-bar.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, TopBarComponent, ProductListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MaterialModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
