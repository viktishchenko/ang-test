import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../../models/courses';
import { Observable, of } from 'rxjs';
import { courses } from 'src/app/data/appData';

// const storageName: string = 'coursesArray';
// const coursesJSON = localStorage.getItem(storageName);
// let coursesStorage: ISelectedCourse[] = coursesJSON
//   ? JSON.parse(coursesJSON)
//   : courses;

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  storageName: string = 'coursesArray';
  coursesJSON = localStorage.getItem(this.storageName);
  coursesStorage: ISelectedCourse[] = this.coursesJSON
    ? JSON.parse(this.coursesJSON)
    : courses;

  all(): Observable<ISelectedCourse[]> {
    console.log('coursesStorage', this.coursesStorage);
    return of(this.coursesStorage);
  }

  find(courseId: number) {}

  create(course: ISelectedCourse) {
    console.log('CREATE COURSE', course);
    course.id = this.generateId();
    this.coursesStorage.push(course);
    localStorage.setItem(this.storageName, JSON.stringify(this.coursesStorage));
    console.log('coursesStorage', this.coursesStorage);
  }

  update(course: ISelectedCourse) {
    console.log('UPDATE COURSE', course);
  }

  delete(courseId: number) {
    console.log('COURSE DELITED', courseId);
  }

  generateId() {
    return courses.length > 0 ? Math.max(...courses.map((c) => c.id)) + 1 : 1;
  }
}
