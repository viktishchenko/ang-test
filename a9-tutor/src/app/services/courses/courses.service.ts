import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../../models/courses';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses: ISelectedCourse[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      description: 'Learn the fundamentals of Angular',
      percentComplete: 36,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true,
    },
    {
      id: 3,
      title: 'JavaScript The Easy Part',
      description: 'Fundamentals part',
      percentComplete: 20,
      favorite: false,
    },
  ];

  private model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<ISelectedCourse[]>(`${BASE_URL}${this.model}`);
  }

  find(courseId: number) {}

  create(course: ISelectedCourse) {
    console.log('CREATE COURSE', course);
  }

  update(course: ISelectedCourse) {
    console.log('UPDATE COURSE', course);
  }

  delete(courseId: number) {
    console.log('DELETE COURSE', courseId);
  }
}
