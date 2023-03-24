import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private dataHandler: DataService) {}

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe((tasks) => (this.tasks = tasks));
  }
}
