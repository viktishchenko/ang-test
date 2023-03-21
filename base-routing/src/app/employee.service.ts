import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = './assets/data/employee.json';
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this._url);
  }
}
