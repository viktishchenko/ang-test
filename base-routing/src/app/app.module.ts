import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserChild1Component } from './user-child1/user-child1.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserComponent,
    ErrorPageComponent,
    UserChild1Component,
    TestComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
