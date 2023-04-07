import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../../models/courses';
import { Observable, of } from 'rxjs';
import { courses } from 'src/app/data/appData';

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
    this.coursesStorage = this.coursesStorage.filter(
      (el) => el.id !== courseId
    );
    localStorage.setItem(this.storageName, JSON.stringify(this.coursesStorage));
  }

  generateId() {
    return this.coursesStorage.length
      ? Math.max(...this.coursesStorage.map((c) => c.id)) + 1
      : 1;
  }

  reset() {
    console.log('RESET');
    localStorage.removeItem(this.storageName);
    localStorage.clear();
    location.reload();
  }
}
