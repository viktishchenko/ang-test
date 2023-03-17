import { Component } from '@angular/core';

export interface IDataList {
  id: number;
  task: string;
}

@Component({
  selector: 'app-todo-base',
  templateUrl: './todo-base.component.html',
  styleUrls: ['./todo-base.component.scss'],
})
export class TodoBaseComponent {
  list: IDataList[] = [];

  addTask(item: string) {
    this.list.push({ id: this.list.length, task: item });
    console.log(this.list);
  }

  removeTask(id: number) {
    console.log('id', id);
    this.list = this.list.filter((item) => item.id !== id);
    console.log('this.list', this.list);
  }
}
