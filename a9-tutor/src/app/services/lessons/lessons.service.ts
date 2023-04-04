import { Injectable } from '@angular/core';
import { ILessons } from 'src/app/models/lessons';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private courseLessons: ILessons[] = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() {}

  allLessons() {
    return this.courseLessons;
  }
}
