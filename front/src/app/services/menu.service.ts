import { Injectable } from '@angular/core';
import { IMenu } from '../models/menu';
import { menu } from '../data/testData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getLinks(): Observable<IMenu[]> {
    return of(menu);
  }
}
