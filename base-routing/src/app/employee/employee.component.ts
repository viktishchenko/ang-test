import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { iEmployee } from '../modules/employee';

@Component({
  selector: 'app-employee',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <ul *ngFor="let item of employeeList">
      <li>{{ item.name }}</li>
    </ul>
  `,
  styles: [``],
})
export class EmployeeComponent implements OnInit {
  title = 'data list';
  employeeList!: iEmployee[];

  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService
      .getEmployees()
      .subscribe((data) => (this.employeeList = data));
  }
}
