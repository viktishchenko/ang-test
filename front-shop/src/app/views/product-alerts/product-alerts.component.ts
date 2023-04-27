import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPoduct } from 'src/app/models/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent {
  @Input() getProductFromParent!: IPoduct;
  @Output() notify = new EventEmitter();
}
