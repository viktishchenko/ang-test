import { Component, Input } from '@angular/core';
import { IHousingLocation } from 'src/app/models/housinglocation';

@Component({
  selector: '.app-housing-location',
  template: `
    <div class="card h-100 listing">
      <img
        [src]="housingLocation.photo"
        class="card-img-top listing-photo"
        alt="Exterior photo of {{ housingLocation.name }}"
      />
      <div class="card-body">
        <h5 class="card-title">{{ housingLocation.name }}</h5>
        <p class="card-text">
          {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>
      </div>
      <div class="card-footer">
        <a [routerLink]="['/details', housingLocation.id]"> Learn More </a>
      </div>
    </div>
  `,
  styleUrls: ['./housing-location.component.scss'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: IHousingLocation;
}
