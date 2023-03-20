import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h1 style="display: inline-block;">Children Comp ←</h1>
    &nbsp;
    <!-- <span>{{ childData }}</span> -->
    <span>{{ newDataName }}</span>

    <br /><br />
    <button (click)="fireEvent()">Send event to parent →</button>
  `,
  styles: [
    `
      h1 {
        color: gray;
      }
      span {
        color: #fb7070;
        font-weight: bold;
        text-decoration: underline;
      }
    `,
  ],
})
export class TestComponent {
  // @Input()
  // childData!: string;
  @Input('childData') newDataName!: string;
  @Output() childEvent = new EventEmitter();
  fireEvent() {
    this.childEvent.emit('This sending from child component');
  }
}
