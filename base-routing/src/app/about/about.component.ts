import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  name = 'halo, this is pipe';
  anotherOne = 'welcome to ... bla-bla-bla!';
  person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  date = new Date();
}
