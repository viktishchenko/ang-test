import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IconModule } from './components/icon/icon.module';
import { UserComponent } from './components/pages/user/user.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, UserComponent],
  imports: [BrowserModule, AppRoutingModule, IconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
