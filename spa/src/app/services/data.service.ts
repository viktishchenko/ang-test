import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { ITask } from '../models/task';
import { Observable } from 'rxjs';
import { TasksDAOArray } from '../data/dao/impl/tasksDAOArray';
import { CategoryDAOArray } from '../data/dao/impl/categoryDAOArray';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private taskDAOArray = new TasksDAOArray();
  private categoryDAOArray = new CategoryDAOArray();

  constructor() {}

  getAllTasks(): Observable<ITask[]> {
    return this.taskDAOArray.getAll();
  }

  getAllCategories(): Observable<ICategory[]> {
    return this.categoryDAOArray.getAll();
  }
}
