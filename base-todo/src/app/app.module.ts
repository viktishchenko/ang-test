import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoBaseComponent } from './components/todo-base/todo-base.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoBaseComponent,
    ParentDataComponent,
    BasicFormComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
