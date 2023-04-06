import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../../models/courses';
import { Observable, of } from 'rxjs';
import { courses } from 'src/app/data/appData';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';

  constructor() {}

  all(): Observable<ISelectedCourse[]> {
    return of(courses);
  }

  find(courseId: number) {}

  create(course: ISelectedCourse) {
    console.log('CREATE COURSE');
  }

  update(course: ISelectedCourse) {
    console.log('UPDATE COURSE', course);
  }

  delete(courseId: number) {
    console.log('COURSE DELITED', courseId);
  }
}
