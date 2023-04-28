import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPoduct } from 'src/app/models/product';
import { products } from 'src/app/data/data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IPoduct | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find((item) => item.id === productIdFromRoute);
  }
}
