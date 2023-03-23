import { ICategory } from '../models/category';
import { IPriority } from '../models/priority';
import { ITask } from '../models/task';

export const categories: ICategory[] = [
  { id: 1, title: 'Работа' },
  { id: 2, title: 'Семья' },
  { id: 3, title: 'Учеба' },
  { id: 4, title: 'Отдых' },
  { id: 5, title: 'Спорт' },
  { id: 6, title: 'Еда' },
  { id: 7, title: 'Финансы' },
  { id: 8, title: 'Гаджеты' },
  { id: 9, title: 'Здоровье' },
  { id: 10, title: 'Автомобиль' },
  { id: 11, title: 'Ремонт' },
];

export const priorities: IPriority[] = [
  { id: 1, title: 'Низкий', color: '#e5e5e5' },
  { id: 2, title: 'Средний', color: '#85D1B2' },
  { id: 3, title: 'Высокий', color: '#F1828D' },
  { id: 4, title: 'Очень срочно!!', color: '#F1128D' },
];

export const tasks: ITask[] = [
  {
    id: 1,
    title: '6 часов – подъем',
    priority: priorities[0],
    completed: false,
    category: categories[0],
    date: new Date('1779-05-30'),
  },

  {
    id: 2,
    title: 'в 7 – разгон облаков и установление хорошей погоды',
    priority: priorities[2],
    completed: true,
    category: categories[1],
  },

  {
    id: 3,
    title: ' с 8 до 10 – подвиг',
    priority: priorities[1],
    completed: false,
    category: categories[1],
    date: new Date('1779-05-30'),
  },
  {
    id: 4,
    title: '16.00 – война с Англией',
    completed: false,
    category: categories[2],
  },
  {
    id: 5,
    title: '18.30 ужин',
    priority: priorities[1],
    completed: true,
    category: categories[2],
    date: new Date('1779-05-30'),
  },
];
