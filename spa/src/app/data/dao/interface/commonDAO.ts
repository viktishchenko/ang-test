import { Observable } from 'rxjs';

// CRUD
// all methods return Observable for async & reactive work style
export interface ICommonDAO<T> {
  // get all items
  getAll(): Observable<T[]>;

  // get one item by id
  get(id: number): Observable<T>;

  // update item
  update(arg0: T): Observable<T>;

  // delete item by id
  delete(id: number): Observable<T>;

  // add item
  add(arg0: T): Observable<T>;
}
