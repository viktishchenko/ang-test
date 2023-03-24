import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { categories, tasks } from '../data/testData';
import { ITask } from '../models/task';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // add Rx Subject-wrapper, tracked obj, its type
  taskSubject = new Subject<ITask[]>();

  constructor() {}

  getCategories(): ICategory[] {
    return categories;
  }

  /*   getTasks(): ITask[] {
      return tasks;
    }*/

  fillTasks() {
    this.taskSubject.next(tasks);
  }

  /*   getTasksByCategory(category: ICategory): ITask[] {
    const task = tasks.filter((el) => el.category === category);
    this.taskSubject.next(task);
  } */

  fillTasksByCategory(category: ICategory) {
    const task = tasks.filter((el) => el.category === category);
    this.taskSubject.next(task);
  }
}
