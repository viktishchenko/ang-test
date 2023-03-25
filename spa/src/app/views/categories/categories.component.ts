import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [];
  selectedCategory: ICategory | undefined;
  constructor(private dataHandler: DataService) {}

  ngOnInit() {
    this.dataHandler.categorySubject.subscribe(
      (categories) => (this.categories = categories)
    );
  }

  showTasksByCategory(category: ICategory) {
    this.selectedCategory = category;
    this.dataHandler.fillTasksByCategory(category);
  }
}
