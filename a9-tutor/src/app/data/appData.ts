import { ISelectedCourse } from '../models/courses';
import { ILessons } from '../models/lessons';
import { ILinks } from '../models/links';

export const links: ILinks[] = [
  { path: '/home', icon: 'home', title: 'Home' },
  { path: '/courses', icon: 'view_list', title: 'Courses' },
  { path: '/user', icon: 'person', title: 'User' },
];

export const courses: ISelectedCourse[] = [
  {
    id: 1,
    title: 'Angular Fundamentals',
    description: 'Learn the fundamentals of Angular',
    percentComplete: 26,
    favorite: true,
  },
  {
    id: 2,
    title: 'JavaScript The Really REALLY HARD PARTS',
    description: 'Worship Will Sentance',
    percentComplete: 50,
    favorite: true,
  },
];

export const courseLessons: ILessons[] = [
  { title: 'Hello Angular' },
  { title: 'Component Fundamentals' },
  { title: 'Template Driven Forms' },
  { title: 'Angular Services' },
  { title: 'Server Communication' },
  { title: 'Component Driven Architecture' },
  { title: 'Angular Routing' },
  { title: 'Unit Testing Fundamentals' },
];
