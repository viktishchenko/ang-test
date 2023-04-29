import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPoduct } from 'src/app/models/product';
import { products } from 'src/app/data/data';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IPoduct | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((item) => item.id === productIdFromRoute);
  }

  addToCart(product: IPoduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
