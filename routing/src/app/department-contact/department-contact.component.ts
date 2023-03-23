import { Component } from '@angular/core';

@Component({
  selector: 'app-deoartment-contact',
  template: ` <h3>{{ title | titlecase }}</h3> `,
  styles: [],
})
export class DepartmentContactComponent {
  title = 'department-contact works!';
}
