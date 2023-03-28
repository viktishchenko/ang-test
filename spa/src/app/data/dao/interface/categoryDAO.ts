import { Observable } from "rxjs";
import { ICategory } from "src/app/models/category";
import { ICommonDAO } from "./commonDAO";

// specific methods not included in the CRUD
export interface ICategoryDAO extends ICommonDAO<ICategory> {
  // serach categoty by name
  search(title: string): Observable<ICategory>;
}
