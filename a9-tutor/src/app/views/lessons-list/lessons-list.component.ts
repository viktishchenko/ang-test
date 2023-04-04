import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ILessons } from 'src/app/models/lessons';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent {
  @Input()
  lessons!: ILessons[];
  @Input()
  lessonsTitle!: string;

  @Output() selected = new EventEmitter();
}
