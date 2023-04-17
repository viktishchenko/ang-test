import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { IUser } from '../models/user';
import { users } from '../data/testData';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsersList(): Observable<IUser[]> {
    return of(users);
  }

  getCurrentUser(userId: number): Observable<IUser> {
    const user = users.filter((u) => u.id == userId)!;
    return from(user);
  }
  deleteUser(userId: number): Observable<IUser> {
    const user = users.filter((u) => u.id != userId)!;
    console.log('DELETE-USER>>', user, userId);
    return from(user);
  }
}
