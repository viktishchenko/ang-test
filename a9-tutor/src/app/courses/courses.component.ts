import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  // CHALLENGE
  // STEP 01: Display courses using ngFor
  // STEP 02: Add event handler to select course
  // STEP 03: Display raw json of selected course

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

  itemCourse = null;
  constructor() {}

  ngOnInit(): void {}

  selectCourse(cource: any) {
    console.log(`halo ${cource.title}`);
    this.itemCourse = cource;
  }

  deleteCource(courceId: any) {
    console.log('CORCE DELETED!', courceId);
    // return this.courses.filter((cource) => cource.id !== courceId);
  }
}
