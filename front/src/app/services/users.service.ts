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

  createUser(user: IUser): Observable<IUser> {
    console.log('CREATE-USER>>', user);
    const id = 123;
    if (user) user.id = this.generateId();
    return of(user);
  }

  updateUser(user: IUser): Observable<IUser> {
    const newUser = user;
    console.log('UPDATE-USER>>', newUser);
    return of(newUser);
  }

  generateId() {
    return users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  }
}
