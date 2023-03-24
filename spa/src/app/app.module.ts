import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CategotiesComponent } from './views/categoties/categoties.component';
import { TasksComponent } from './views/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CategotiesComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
