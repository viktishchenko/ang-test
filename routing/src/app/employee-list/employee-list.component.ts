import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: ` <h3>{{ title | titlecase }}</h3> `,
  styles: [],
})
export class EmployeeListComponent {
  title = 'employee-list works!';
}
