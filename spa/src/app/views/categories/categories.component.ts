import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  @Input() categories: ICategory[] = [];

  @Output()
  selectCategory = new EventEmitter();
  selectedCategory: ICategory | undefined;
  constructor(private dataHandler: DataService) {}

  ngOnInit() {
    // this.dataHandler
    //   .getAllCategories()
    //   .subscribe((categories) => (this.categories = categories));
  }

  showTasksByCategory(category: ICategory) {
    if (this.selectedCategory === category) {
      return;
    }
    this.selectedCategory = category;
    // this.dataHandler.fillTasksByCategory(category);
    this.selectCategory.emit(this.selectedCategory);
  }
}
