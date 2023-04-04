import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectedCourse } from 'src/app/models/courses';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  @Input()
  selected!: ISelectedCourse;
  @Output() save = new EventEmitter();
  @Output() clear = new EventEmitter();
}
