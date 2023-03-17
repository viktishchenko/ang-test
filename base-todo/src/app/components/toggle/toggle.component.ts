import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  dispaly = false;

  toggleElem() {
    console.log('yepp');
    this.dispaly = !this.dispaly;
  }
}
