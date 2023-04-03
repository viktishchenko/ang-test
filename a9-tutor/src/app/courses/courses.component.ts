import { Component, OnInit } from '@angular/core';

export interface ISelectedCourse {
  id: number;
  title: string;
  description: string;
  percentComplete: number;
  favorite: boolean;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      description: 'Learn the fundamentals of Angular',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true,
    },
  ];

  selectedCourse: ISelectedCourse = {
    id: 0,
    title: '',
    description: '',
    percentComplete: 0,
    favorite: false,
  };

  constructor() {}

  ngOnInit(): void {}

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
