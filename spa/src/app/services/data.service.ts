import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { categories, tasks } from '../data/testData';
import { ITask } from '../models/task';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // add Rx Subject-wrapper, tracked obj, its type
  taskSubject = new BehaviorSubject<ITask[]>(tasks);
  categorySubject = new BehaviorSubject<ICategory[]>(categories);

  constructor() {}

  /*   getCategories(): ICategory[] {
    return categories;
  } */

  fillTasks() {
    this.taskSubject.next(tasks);
  }

  fillTasksByCategory(category: ICategory) {
    const task = tasks.filter((el) => el.category === category);
    this.taskSubject.next(task);
  }
}
