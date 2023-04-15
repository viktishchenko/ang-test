import { IMenu } from '../models/menu';
import { IUser } from '../models/user';

export const menu: IMenu[] = [
  {
    id: 1,
    title: 'Главная',
    href: '/',
  },
  {
    id: 2,
    title: 'Пользователи',
    href: '/users',
    icon: 'bi bi-people',
  },
];

export const users: IUser[] = [
  {
    id: 1,
    name: 'Петров Петр Петрович',
    email: 'petr@mail.com',
    createdAt: new Date('2023-03-22'),
    updateAt: new Date('2023-03-27'),
  },
  {
    id: 2,
    name: 'Иванов Иван Иванович',
    email: 'ivan@mail.com',
    createdAt: new Date('2023-02-20'),
    updateAt: new Date('2023-03-21'),
  },
  {
    id: 3,
    name: 'Сидоров Сидор Сидорович',
    email: 'sidor@mail.com',
    createdAt: new Date('2023-02-12'),
    updateAt: new Date('2023-03-29'),
  },
];
