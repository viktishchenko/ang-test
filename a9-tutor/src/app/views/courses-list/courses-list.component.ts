import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectedCourse } from 'src/app/models/courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input()
  courses!: ISelectedCourse[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
