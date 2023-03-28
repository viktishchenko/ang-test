import { IPriority } from 'src/app/models/priority';
import { ICommonDAO } from './commonDAO';

export interface IPriorityDAO extends ICommonDAO<IPriority> {
  // specific priority methods...
}
