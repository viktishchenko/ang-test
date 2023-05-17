import { Component } from '@angular/core';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-form',
  template: `
    <h1>Hero from</h1>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Dr. IQ"
        />
      </div>
      <div class="form-group">
        <label for="alterEgo">Alter Ego</label>
        <input
          type="text"
          class="form-control"
          id="alterEgo"
          placeholder="Chack OverStreet"
        />
      </div>
      <div class="form-group">
        <label for="power">Hero Power</label>
        <select class="form-control" id="power">
          <option *ngFor="let pow of powers">{{ pow }}</option>
        </select>
      </div>
    </form>
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
