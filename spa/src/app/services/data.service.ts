import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { ITask } from '../models/task';
import { Observable } from 'rxjs';
import { TasksDAOArray } from '../data/dao/impl/tasksDAOArray';
import { CategoryDAOArray } from '../data/dao/impl/categoryDAOArray';
import { IPriority } from '../models/priority';

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

  searchTasks(
    category: ICategory,
    searchText: string,
    status: boolean,
    priority: IPriority
  ): Observable<ITask[]> {
    return this.taskDAOArray.search(category, searchText, status, priority);
  }
}
