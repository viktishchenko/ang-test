import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHousingLocation } from 'src/app/models/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-details',
  template: `
    <article class="container pt-3">
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>
            Does this location have laundry: {{ housingLocation?.laundry }}
          </li>
        </ul>
      </section>
    </article>
  `,
  styles: [
    `
      .listing-photo {
        height: 360px;
        width: 50%;
        object-fit: cover;
        border-radius: 30px;
        float: right;
      }

      .listing-heading {
        font-size: 48pt;
        font-weight: bold;
        margin-bottom: 15px;
      }

      .listing-location::before {
        content: url('/assets/location-pin.svg') / '';
      }

      .listing-location {
        font-size: 24pt;
        margin-bottom: 15px;
      }

      .listing-features > .section-heading {
        color: var(--secondary-color);
        font-size: 24pt;
        margin-bottom: 15px;
      }

      .listing-features {
        margin-bottom: 20px;
      }

      .listing-features li {
        font-size: 14pt;
      }

      li {
        list-style-type: none;
      }

      .listing-apply .section-heading {
        font-size: 18pt;
        margin-bottom: 15px;
      }

      label,
      input {
        display: block;
      }
      label {
        color: var(--secondary-color);
        font-weight: bold;
        text-transform: uppercase;
        font-size: 12pt;
      }
      input {
        font-size: 16pt;
        margin-bottom: 15px;
        padding: 10px;
        width: 400px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: solid 0.3px;
      }
      @media (max-width: 1024px) {
        .listing-photo {
          width: 100%;
          height: 360px;
        }
      }
    `,
  ],
})
export class DetailsComponent {
  housingLocationId = -1;
  housingLocation: IHousingLocation | undefined;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId
    );
  }
}
