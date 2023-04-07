import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { ISelectedCourse } from '../../models/courses';

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
    this.loadCourses();
  }

  loadCourses() {
    this.courseService.all().subscribe((courses) => (this.courses = courses));
  }

  selectCourse(course: ISelectedCourse) {
    console.log(`select btn ${course.title}`);
    this.selectedCourse = course;
  }

  saveCourse(course: ISelectedCourse) {
    if (course.id === 0) {
      console.log('SAVE');
      this.courseService.create(course);
      return this.refreshCourses();
    } else {
      console.log('UPDATE');
      return this.courseService.update(course);
    }
  }

  deleteCourse(courseId: number) {
    console.log('delete', courseId);
    this.courseService.delete(courseId);
  }

  refreshCourses() {
    this.cancel();
    this.loadCourses();
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
