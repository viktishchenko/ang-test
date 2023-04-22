import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { title } from '../data/testData';
import { ITitle } from '../models/title';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getTitleData(): Observable<ITitle[]> {
    return of(title);
  }
}
