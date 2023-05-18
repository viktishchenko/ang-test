import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-form',
  template: `
    <h1>Hero from</h1>
    <form #heroForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          [(ngModel)]="model.name"
          required
          type="text"
          class="form-control"
          placeholder="Dr. IQ"
          name="name"
          #name="ngModel"
        />
        <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
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
          placeholder="Chack OverStreet"
          name="alterEgo"
        />
      </div>
      <div class="form-group">
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
    </form>
    <div>
      {{ model | json }}
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
    this.submitted = true;
  }
}
