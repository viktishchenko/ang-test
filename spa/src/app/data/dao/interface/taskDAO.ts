import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { IPriority } from 'src/app/models/priority';
import { ITask } from 'src/app/models/task';
import { ICommonDAO } from './commonDAO';

// specific tasks methods not included in CRUD
export interface ITaskDAO extends ICommonDAO<ITask> {
  // search tasks by all parameters
  // if param is null - it not taken into account
  search(
    category: ICategory,
    searchText: string,
    status: boolean,
    priority: IPriority
  ): Observable<ITask[]>;

  // number of completed tasks in a given category (if category === null, for all categories)
  getCompletedCountInCategory(category: ICategory): Observable<number>;

  // number uncompleted tasks in a given category (if category === null, for all categories)
  getUncompletedCountInCategory(category: ICategory): Observable<number>;

  // all tasks number in a given category (if category === null, for all categories)
  getTotalCountInCategory(category: ICategory): Observable<number>;

  // total tasks number
  getTotalCount(category: ICategory): Observable<number>;
}
