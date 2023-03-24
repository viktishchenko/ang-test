import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categoties',
  templateUrl: './categoties.component.html',
  styleUrls: ['./categoties.component.scss'],
})
export class CategotiesComponent implements OnInit {
  categories: ICategory[] = [];
  constructor(private dataHandler: DataService) {}

  ngOnInit() {
    this.categories = this.dataHandler.getCategories();
  }

  showTasksByCategory(category: ICategory) {
    this.dataHandler.getTasksByCategory(category);
  }
}
