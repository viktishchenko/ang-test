import { Injectable } from '@angular/core';
import { ICategory } from '../models/category';
import { categories } from '../data/testData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getCategories(): ICategory[] {
    return categories;
  }
}
