import { Component } from '@angular/core';

@Component({
  selector: 'app-deoartment-overview',
  template: ` <h3>{{ title | titlecase }}</h3> `,
  styles: [],
})
export class DepartmentOverviewComponent {
  title = 'department-overview works!';
}
