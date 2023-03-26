import { Component, OnInit } from '@angular/core';
import { ITask } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  //init table columns
  displayedColumns: string[] = [
    'color',
    'id',
    'title',
    'date',
    'priority',
    'category',
  ];

  dataSource!: MatTableDataSource<ITask>;

  tasks: ITask[] = [];

  constructor(private dataHandler: DataService) {}

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe((tasks) => (this.tasks = tasks));

    // init data!!! (add: DB, arr, JSON, etc.)
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }

  toggleClassCompleted(task: ITask) {
    task.completed = !task.completed;
  }

  // return color depend on task status
  getPriorityColor(task: ITask) {
    // completed task
    if (task.completed) {
      return '#F8F9FA'; // TODO create constants for colors ( magic numbers)
    }
    if (task.priority?.title === 'Высокий') {
      return '#F1828D'; // TODO create constants for colors ( magic numbers)
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff'; // TODO create constants for colors ( magic numbers)
  }

  // show current conditions =(category, search, filters,etc.)
  private refreshTable() {
    this.dataSource!.data = this.tasks; // upd data source
  }
}
