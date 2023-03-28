import { Observable } from 'rxjs';
import { ICategory } from 'src/app/models/category';
import { ICategoryDAO } from '../interface/categoryDAO';

export class CategoryDAOArray implements ICategoryDAO {
  search(title: string): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  getAll(): Observable<ICategory[]> {
    throw new Error('Method not implemented.');
  }
  get(id: number): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  update(arg0: ICategory): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
  add(arg0: ICategory): Observable<ICategory> {
    throw new Error('Method not implemented.');
  }
}
