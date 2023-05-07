import { Component } from '@angular/core';
import { IHousingLocation } from 'src/app/models/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  template: `
    <section class="container content">
      <form>
        <div class="input-group mb-3">
          <input
            #filter
            type="text"
            class="form-control"
            placeholder="Filter by city"
          />
          <button
            type="button"
            class="primary"
            (click)="filterResults(filter.value)"
          >
            <i class="bi bi-search me-2"></i> Search
          </button>
        </div>
      </form>
    </section>
    <section class="container">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          class="app-housing-location col"
          *ngFor="let housingLocationsss of housingLocationList"
          [housingLocation]="housingLocationsss"
        ></div>
      </div>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: IHousingLocation[] = [];
  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }

  filterResults(text: string) {
    this.housingService
      .getFilteredLocationList(text)
      .subscribe(
        (filteredLocation) => (this.housingLocationList = filteredLocation)
      );
  }
}
