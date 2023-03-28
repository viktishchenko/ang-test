import { Observable, of } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { IPriority } from 'src/app/models/priority';
import { ITask } from 'src/app/models/task';
import { tasks } from '../../testData';
import { ITaskDAO } from '../interface/taskDAO';

export class TasksDAOArray implements ITaskDAO {
  search(
    category: ICategory,
    searchText: string,
    status: boolean,
    priority: IPriority
  ): Observable<ITask[]> {
    throw new Error('Method not implemented.');
  }
  getCompletedCountInCategory(category: ICategory): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getUncompletedCountInCategory(category: ICategory): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getTotalCountInCategory(category: ICategory): Observable<number> {
    throw new Error('Method not implemented.');
  }
  getTotalCount(category: ICategory): Observable<number> {
    throw new Error('Method not implemented.');
  }

  // wrap (tasks[]) with method (of) to use Observable
  getAll(): Observable<ITask[]> {
    return of(tasks);
  }
  get(id: number): Observable<ITask> {
    throw new Error('Method not implemented.');
  }
  update(arg0: ITask): Observable<ITask> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<ITask> {
    throw new Error('Method not implemented.');
  }
  add(arg0: ITask): Observable<ITask> {
    throw new Error('Method not implemented.');
  }
}
