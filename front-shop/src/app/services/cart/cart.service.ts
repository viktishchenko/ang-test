import { Injectable } from '@angular/core';
import { IPoduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IPoduct[] = [];

  constructor() {}

  addToCart(product: IPoduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }
}
