import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'base-todo';
  parentData = 10;
  printParentData() {
    console.log('halo');
    console.log('this.parentData', this.parentData);
  }
}
