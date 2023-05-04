import { Component } from '@angular/core';
import { IHousinglocation } from 'src/app/models/housinglocation';

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
      <app-housing-location></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocation: IHousinglocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: 'assets/example-house.jpg',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };
}
