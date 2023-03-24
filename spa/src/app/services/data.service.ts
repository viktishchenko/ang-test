import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { categories, tasks } from '../data/testData';
import { ITask } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCategories(): ICategory[] {
    return categories;
  }

  getTasks(): ITask[] {
    return tasks;
  }

  getTasksByCategory(category: ICategory): ITask[] {
    const task = tasks.filter((el) => el.category === category);
    console.log('task', task);
    return task;
  }
}
