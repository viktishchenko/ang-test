import { Component, OnInit } from '@angular/core';
import { ILessons } from '../../models/lessons';
import { LessonsService } from '../../services/lessons/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Hello Workshop';
  currentLesson: string = '';

  courseLessons: ILessons[] = [];

  constructor(private lessons: LessonsService) {}

  ngOnInit(): void {
    this.lessons
      .getLessons()
      .subscribe((courseLessons) => (this.courseLessons = courseLessons));
  }

  selectLesson(lesson: string) {
    console.log('SELECT LESSON FIRED!', lesson);
    this.currentLesson = lesson;
  }
}
