import { Component, OnInit } from '@angular/core';
import { ITask } from './models/task';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'spa';
  tasks: ITask[] = [];

  constructor(private dataHandler: DataService) {}

  ngOnInit() {
    this.dataHandler
      .getAllTasks()
      .subscribe((tasks: ITask[]) => (this.tasks = tasks));
  }
}
