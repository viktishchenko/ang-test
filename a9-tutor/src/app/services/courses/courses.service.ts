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
    return of(this.coursesStorage);
  }

  find(courseId: number) {}

  create(course: ISelectedCourse) {
    console.log('CREATE COURSE', course);
    course.id = this.generateId();
    this.coursesStorage.push(course);
    localStorage.setItem(this.storageName, JSON.stringify(this.coursesStorage));
  }

  update(course: ISelectedCourse) {
    this.coursesStorage.find((el, idx) => {
      if (el.id === course.id) this.coursesStorage[idx] = course;
    });
    localStorage.setItem(this.storageName, JSON.stringify(this.coursesStorage));
  }

  delete(courseId: number) {
    console.log('COURSE DELITED', courseId);
    this.coursesStorage = this.coursesStorage.filter(
      (el) => el.id !== courseId
    );
    console.log('coursesStorage', this.coursesStorage);
    localStorage.setItem(this.storageName, JSON.stringify(this.coursesStorage));
  }

  generateId() {
    return this.coursesStorage.length
      ? Math.max(...this.coursesStorage.map((c) => c.id)) + 1
      : 1;
  }
}
