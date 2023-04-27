import { Component, OnInit } from '@angular/core';
import { IPoduct } from 'src/app/models/product';
import { products } from '../../data/data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList!: IPoduct[];

  ngOnInit(): void {
    this.productList = products;
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('Notify works!');
  }
}
