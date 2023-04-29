import { Component } from '@angular/core';
import { IPoduct } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService: CartService) {}
}
