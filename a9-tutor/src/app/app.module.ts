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
import { HttpClientModule } from '@angular/common/http';
import { CourseDetailsComponent } from './views/course-details/course-details.component';
import { CoursesListComponent } from './views/courses-list/courses-list.component';
import { LessonsListComponent } from './views/lessons-list/lessons-list.component';
import { UserComponent } from './views/user/user.component';
import { LinksService } from './services/links/links.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CourseDetailsComponent,
    CoursesListComponent,
    LessonsListComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CoursesService, LessonsService, LinksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
