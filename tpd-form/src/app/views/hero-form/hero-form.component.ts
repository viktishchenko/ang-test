import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-form',
  template: `
    <h1>Hero from</h1>
    <div [hidden]="submitted">
      <form (ngSubmit)="onSubmit()" #heroForm="ngForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            [(ngModel)]="model.name"
            required
            type="text"
            class="form-control"
            placeholder="E.g. Dr. IQ"
            name="name"
            #name="ngModel"
          />
          <div
            [hidden]="name.valid || name.pristine"
            class="alert alert-danger"
          >
            Name is required
          </div>
        </div>
        <div class="form-group">
          <label for="alterEgo">Alter Ego</label>
          <input
            id="alterEgo"
            [(ngModel)]="model.alterEgo"
            type="text"
            class="form-control"
            placeholder="E.g. Chack OverStreet"
            name="alterEgo"
          />
        </div>
        <div class="form-group mb-2">
          <label for="power">Hero Power</label>
          <select
            class="form-control"
            id="power"
            required
            [(ngModel)]="model.power"
            name="power"
          >
            <option *ngFor="let pow of powers">{{ pow }}</option>
          </select>
        </div>
        <button
          type="submit"
          class="btn btn-success mb-2"
          [disabled]="!heroForm.form.valid"
        >
          Submit
        </button>
      </form>
      <!-- </div> -->
      <div>
        {{ model | json }}
        <hr />
        <button class="btn btn-dark" (click)="addHero()">add new hero</button>
        <button
          [disabled]="!heroForm.form.valid"
          (click)="onSubmit()"
          type="submit"
          class="btn btn-primary float-end"
        >
          submit form
        </button>
      </div>
    </div>
    <div [hidden]="!submitted">
      <h2>You submitted the following:</h2>
      <div class="row">
        <div class="col-xs-3">Name</div>
        <div class="col-xs-9">{{ model.name }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Alter Ego</div>
        <div class="col-xs-9">{{ model.alterEgo }}</div>
      </div>
      <div class="row">
        <div class="col-xs-3">Power</div>
        <div class="col-xs-9">{{ model.power }}</div>
      </div>
      <br />
      <button type="button" class="btn btn-primary" (click)="submitted = false">
        Edit
      </button>
    </div>
  `,
  styles: [
    `
      .form-group {
        padding: 0.5rem 0;
      }
    `,
  ],
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck OverStreet');

  submitted = false;

  onSubmit() {
    console.log('form submitted');
    this.submitted = true;
  }

  addHero() {
    this.model = new Hero(42, '', '');
  }
}
