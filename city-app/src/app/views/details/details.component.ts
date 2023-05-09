import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHousingLocation } from 'src/app/models/housinglocation';
import { HousingService } from 'src/app/services/housing.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  template: `
    <article class="container py-3">
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
      <section class="listing-apply form-section">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <div class="form-group">
            <label for="first-name">first name</label>
            <input
              id="first-name"
              type="text"
              formControlName="firstName"
              class="form-control"
              placeholder="Enter First Name"
            />
          </div>
          <div class="form-group">
            <label for="first-name">last name</label>
            <input
              id="last-name"
              type="text"
              formControlName="lastName"
              class="form-control"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="form-group">
            <label for="email">email</label>
            <input
              id="email"
              type="email"
              formControlName="email"
              class="form-control"
              placeholder="Enter email"
            />
          </div>
          <button type="submit" class="primary">Apply now</button>
        </form>
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
        font-size: 38pt;
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
        max-width: 400px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: solid 0.3px var(--accent-color);
      }
      .form-control::placeholder {
        color: #d2d2d2;
        opacity: 1;
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

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService
      .getHousingLocationById(this.housingLocationId)
      .subscribe((housingLocation) => (this.housingLocation = housingLocation));
  }

  submitApplication() {
    this.housingService.submitAplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
