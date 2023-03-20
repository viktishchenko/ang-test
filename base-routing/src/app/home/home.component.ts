import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  flag = true;
  greeting = 'Welcome!';
  greet = '';
  bye = 'Bye!';
  handleClick() {
    this.flag = !this.flag;
  }
  eventClick(event: any) {
    console.log('event', event);
  }
}
