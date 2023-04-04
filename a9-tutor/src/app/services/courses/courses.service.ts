import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../../models/courses';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<ISelectedCourse[]>(this.getUrl());
  }

  find(courseId: number) {}

  create(course: ISelectedCourse) {
    return this.http.post<ISelectedCourse>(this.getUrl(), course);
  }

  update(course: ISelectedCourse) {
    console.log('UPDATE COURSE', course);
    return this.http.put<ISelectedCourse>(
      `${this.getUrl()}${course.id}`,
      course
    );
  }

  delete(courseId: number) {
    console.log('COURSE DELITED', courseId);
    return this.http.delete(`${this.getUrl()}${courseId}`);
  }

  private getUrl() {
    return `${BASE_URL}${this.model}/`;
  }
}
