import { Component } from '@angular/core';
import { IHousingLocation } from 'src/app/models/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="container content">
      <form role="search">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Filter by city"
          />
          <button type="submit" class="primary">
            <i class="bi bi-search me-2"></i> Search
          </button>
        </div>
      </form>
    </section>
    <section class="results container">
      <app-housing-location
        *ngFor="let housingLocationsss of housingLocationList"
        [housingLocation]="housingLocationsss"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: IHousingLocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
