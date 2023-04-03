import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './services/courses.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CoursesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
