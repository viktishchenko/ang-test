import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
})
export class ParentDataComponent {
  @Input() getParentData: number = 0;

  updateParentData() {
    console.log('this.getParentData', this.getParentData);
    this.getParentData = Math.random();
    // this.parentData = Math.floor(Math.random() * 10);
    // console.log('this.parentData', this.parentData);
  }
}
