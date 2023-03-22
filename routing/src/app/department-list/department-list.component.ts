import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>{{ title | titlecase }}</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent {
  title = 'departments list';
  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'NextJs' },
    { id: 5, name: 'MaterialUI' },
  ];

  constructor(private router: Router) {}

  onSelect(department: { id: number }) {
    this.router.navigate(['departments', department.id]);
  }
}
