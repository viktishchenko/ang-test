import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  constructor(private cartService: CartService) {}

  onSubmit(): void {
    console.log('hola');
    this.items = this.cartService.clearCart();
    console.log(`Your order has been submitted`, this.form.value);
    this.form.valid;
    this.form.reset();
  }

  getErrorMessage() {
    console.log('get error!!');
  }
}
