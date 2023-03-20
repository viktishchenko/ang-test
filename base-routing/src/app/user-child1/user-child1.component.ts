import { Component } from '@angular/core';

@Component({
  selector: 'app-user-child1',
  templateUrl: './user-child1.component.html',
  styleUrls: ['./user-child1.component.scss'],
})
export class UserChild1Component {
  conditionalRendering = true;
  styleBinding = 'orange';
  objectStyleBinding = {
    color: 'blue',
    fontStyle: 'italic',
  };
}
