import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPoduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: IPoduct[] = [];

  constructor(private http: HttpClient) {}

  addToCart(product: IPoduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
