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
    title: 'Скамейки в парке, пустыри',
    priority: priorities[2],
    completed: false,
    category: categories[9],
    date: new Date('2019-04-10'),
  },

  {
    id: 2,
    title: 'По той же все, нехоженой судьбе',
    priority: priorities[0],
    completed: false,
    category: categories[0],
    date: new Date('2019-04-11'),
  },

  {
    id: 3,
    title: 'Каких клинков, какой метал',
    priority: priorities[2],
    completed: true,
    category: categories[1],
  },

  {
    id: 4,
    title: 'Версия необузданности – 1.00.00',
    priority: priorities[1],
    completed: false,
    category: categories[1],
    date: new Date('2019-08-17'),
  },
  {
    id: 5,
    title: 'Он где твой парус трепетал',
    completed: false,
    category: categories[2],
  },
  {
    id: 6,
    title: 'Сдави и омой дрожащую кость',
    priority: priorities[1],
    completed: true,
    category: categories[2],
    date: new Date('2019-06-11'),
  },

  {
    id: 7,
    title: 'И ты не жди, раз дома нету',
    priority: priorities[2],
    completed: false,
    category: categories[3],
  },
  {
    id: 8,
    title: 'Глаза чарующего мая',
    completed: false,
    category: categories[5],
  },
  {
    id: 9,
    title: 'Как снег души на улице лежит',
    priority: priorities[2],
    completed: false,
    category: categories[4],
    date: new Date('2019-03-12'),
  },
  {
    id: 10,
    title: 'У нее еще вчера',
    priority: priorities[0],
    completed: true,
    category: categories[4],
  },

  {
    id: 11,
    title: 'Наполнит ветер ночь интриг',
    completed: false,
  },

  {
    id: 12,
    title: 'Выученный, уверенный',
    priority: priorities[1],
    completed: false,
    category: categories[2],
  },
  {
    id: 13,
    title: 'Шалят на улицах столицы',
    priority: priorities[2],
    completed: false,
    category: categories[5],
    date: new Date('2019-05-11'),
  },

  {
    id: 14,
    title: 'Но время, грезя предстоящим',
    completed: true,
    category: categories[0],
  },

  {
    id: 15,
    title: 'Рыльце отвернула',
    priority: priorities[2],
    completed: true,
  },

  {
    id: 16,
    title: 'Я старше Пушкина',
    priority: priorities[3],
    completed: false,
    category: categories[6],
  },

  {
    id: 17,
    title: 'Уж не коней подгонит, а машины',
    priority: priorities[2],
    completed: false,
    category: categories[6],
  },

  {
    id: 18,
    title: 'А  вместо снежного покрова',
    priority: priorities[3],
    completed: false,
    category: categories[8],
    date: new Date('2020-12-11'),
  },

  {
    id: 19,
    title: 'И улица свивается в клубок',
    priority: priorities[0],
    completed: false,
    category: categories[7],
    date: new Date('2019-10-11'),
  },

  {
    id: 20,
    title: 'По той же все, нехоженой судьбе',
    priority: priorities[0],
    completed: false,
    category: categories[4],
    date: new Date('2019-03-17'),
  },
];
