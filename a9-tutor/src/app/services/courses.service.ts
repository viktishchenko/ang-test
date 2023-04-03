import { Injectable } from '@angular/core';
import { ISelectedCourse } from '../models/courses';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  courses: ISelectedCourse[] = [
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
}
