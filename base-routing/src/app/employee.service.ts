import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iEmployee } from './modules/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = 'https://jsonplaceholder.typicode.com/users';
  // private _url: string = './assets/data/employee.json';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<iEmployee[]> {
    return this.http.get<iEmployee[]>(this._url);
  }
}
