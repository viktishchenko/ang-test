import { Injectable } from '@angular/core';
import { iEmployee } from './modules/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}
  getEmployees(): iEmployee[] {
    return [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Tom', age: 20 },
      { id: 3, name: 'Max', age: 40 },
      { id: 4, name: 'Susan', age: 25 },
    ];
  }
}
