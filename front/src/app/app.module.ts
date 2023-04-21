import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { IconModule } from './components/icon/icon.module';
import { UserComponent } from './components/pages/user/user.component';
import { UserFormModule } from './components/user-form/user-form.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, UserComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IconModule, UserFormModule],
})
export class AppModule {}
