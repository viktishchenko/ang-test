import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISelectedCourse } from 'src/app/models/courses';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent {
  pickedCourse!: ISelectedCourse;
  pickedCourseTitle!: string;

  @Output() save = new EventEmitter();
  @Output() clear = new EventEmitter();

  @Input() set selected(course: ISelectedCourse) {
    if (course) {
      this.pickedCourse = Object.assign({}, course);
      this.pickedCourseTitle = course.title;
    }
  }
}
