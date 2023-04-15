import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../models/user';
import { users } from '../data/testData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsersData(): Observable<IUser[]> {
    return of(users);
  }
}
