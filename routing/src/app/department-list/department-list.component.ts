import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>{{ title | titlecase }}</h3>
    <ul class="items">
      <li
        (click)="onSelect(department)"
        [class.selected]="isSelected(department)"
        *ngFor="let department of departments"
      >
        <span class="badge">{{ department.id }}</span> {{ department.name }}
      </li>
    </ul>
  `,
  styles: [],
})
export class DepartmentListComponent implements OnInit {
  title = 'departments list';
  selectedId!: number;

  departments = [
    { id: 1, name: 'Angular' },
    { id: 2, name: 'Node' },
    { id: 3, name: 'MongoDB' },
    { id: 4, name: 'NextJs' },
    { id: 5, name: 'MaterialUI' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.selectedId = id;
    });
  }

  onSelect(department: { id: number }) {
    // this.router.navigate(['departments', department.id]);
    // relative psth instead ↑↓
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: { id: number }) {
    return department.id === this.selectedId;
  }
}
