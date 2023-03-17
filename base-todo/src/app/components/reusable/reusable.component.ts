import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.scss'],
})
export class ReusableComponent {
  @Input()
  user: { id: number; name: string; email: string } = {
    id: 0,
    name: '',
    email: '',
  };
}
