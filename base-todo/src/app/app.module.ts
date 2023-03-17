import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoBaseComponent } from './components/todo-base/todo-base.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
