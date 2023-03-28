import { Observable } from 'rxjs';
import { IPriority } from 'src/app/models/priority';
import { IPriorityDAO } from '../interface/priorityDAO';

export class PriorityDAOArray implements IPriorityDAO {
  getAll(): Observable<IPriority[]> {
    throw new Error('Method not implemented.');
  }
  get(id: number): Observable<IPriority> {
    throw new Error('Method not implemented.');
  }
  update(arg0: IPriority): Observable<IPriority> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<IPriority> {
    throw new Error('Method not implemented.');
  }
  add(arg0: IPriority): Observable<IPriority> {
    throw new Error('Method not implemented.');
  }
}
