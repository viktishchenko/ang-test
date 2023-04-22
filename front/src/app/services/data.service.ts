import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { title } from '../data/testData';
import { ITitle } from '../models/title';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private isEditing = new BehaviorSubject(false);
  currentEdit = this.isEditing.asObservable();

  getTitleData(): Observable<ITitle[]> {
    return of(title);
  }

  getIsEditing(isEdit: boolean) {
    console.log('isEdit>>', isEdit);
    this.isEditing.next(!isEdit);
  }
}
