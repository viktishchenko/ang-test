import { ICategory } from './category';
import { IPriority } from './priority';

export interface ITask {
  id: number;
  title: string;
  completed: boolean;
  priority?: IPriority;
  category?: ICategory;
  date?: Date;
}
