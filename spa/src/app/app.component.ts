import { Component, OnInit } from '@angular/core';
import { ICategory } from './models/category';
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
  categories: ICategory[] = [];

  constructor(private dataHandler: DataService) {}

  ngOnInit() {
    this.dataHandler
      .getAllTasks()
      .subscribe((tasks: ITask[]) => (this.tasks = tasks));
    this.dataHandler
      .getAllCategories()
      .subscribe((categories) => (this.categories = categories));
  }
}
