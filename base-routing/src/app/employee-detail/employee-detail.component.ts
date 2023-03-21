import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { iEmployee } from '../modules/employee';

@Component({
  selector: 'app-employee-ditail',
  template: `
    <h1>{{ title | titlecase }}</h1>

    <ul *ngFor="let item of employeeList">
      <li>id:{{ item.id }} - {{ item.name }} {{ item.age }}</li>
    </ul>
  `,
  styles: [``],
})
export class EmployeeDetailComponent {
  title = 'data list detail';
  employeeList: iEmployee[] = [];

  constructor(private _employee: EmployeeService) {}

  ngOnInit() {
    this.employeeList = this._employee.getEmployees();
  }
}
