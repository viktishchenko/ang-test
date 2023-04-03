import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { ISelectedCourse } from '../models/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: ISelectedCourse[] = [];

  selectedCourse: ISelectedCourse = {
    id: 0,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  };

  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {
    this.courses = this.courseService.courses;
  }

  selectCourse(course: ISelectedCourse) {
    console.log(`select btn ${course.title}`);
    this.selectedCourse = course;
  }

  saveCourse() {
    console.log('COURSE WAS SAVED!');
  }

  deleteCourse(courseId: number) {
    console.log('COURSE DELETED!', courseId);
    // return this.courses.filter((cource) => cource.id !== courceId);
  }

  cancel() {
    const empty = {
      id: 0,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
    console.log('cancel btn');
    this.selectedCourse = empty;
  }
}
