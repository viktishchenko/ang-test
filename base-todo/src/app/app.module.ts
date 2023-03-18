import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoBaseComponent } from './components/todo-base/todo-base.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { BasicFormComponent } from './components/basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './components/toggle/toggle.component';
import { ReusableComponent } from './components/reusable/reusable.component';
import { ChildToParentComponent } from './components/child-to-parent/child-to-parent.component';
import { TwowayBindingComponent } from './components/twoway-binding/twoway-binding.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoBaseComponent,
    ParentDataComponent,
    BasicFormComponent,
    ToggleComponent,
    ReusableComponent,
    ChildToParentComponent,
    TwowayBindingComponent,
    ReactiveFormComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
