import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './child-to-parent.component.html',
  styleUrls: ['./child-to-parent.component.scss'],
})
export class ChildToParentComponent {
  @Output() updateDataEvent = new EventEmitter();
}
