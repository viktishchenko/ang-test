import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { CoursesComponent } from './views/courses/courses.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './services/courses/courses.service';
import { LessonsService } from './services/lessons/lessons.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CoursesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [CoursesService, LessonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
