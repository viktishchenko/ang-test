import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'base-todo';
  parentData = '10';
  componentData = [
    { id: 1, name: 'Tom', email: 'tom@test.com' },
    { id: 2, name: 'John', email: 'john@test.com' },
    { id: 3, name: 'Max', email: 'max@test.com' },
  ];
  printParentData() {
    console.log('halo');
    console.log('this.parentData', this.parentData);
  }

  updateData(item: string) {
    console.log('item>>', item);
    this.parentData = item;
  }
}
