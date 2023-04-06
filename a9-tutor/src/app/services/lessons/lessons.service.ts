import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { courseLessons } from 'src/app/data/appData';
import { ILessons } from 'src/app/models/lessons';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor() {}

  getLessons(): Observable<ILessons[]> {
    return of(courseLessons);
  }
}
