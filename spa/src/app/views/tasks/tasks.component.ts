import {
  AfterViewInit,
  Component,
  Injectable,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ITask } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { Subject } from 'rxjs';
import { MatSort } from '@angular/material/sort';

//--->

@Injectable()
export class MyCustomPaginatorIntl implements MatPaginatorIntl {
  changes = new Subject<void>();

  // For internationalization, the `$localize` function from
  // the `@angular/localize` package can be used.
  firstPageLabel = $localize`Первая страница`;
  itemsPerPageLabel = $localize`Задач на странице:`;
  lastPageLabel = $localize`Последняя страница`;

  // You can set labels to an arbitrary string too, or dynamically compute
  // it through other third-party internationalization libraries.
  nextPageLabel = 'Следующая страница';
  previousPageLabel = 'Предыдущая страница';

  getRangeLabel(page: number, pageSize: number, length: number): string {
    if (length === 0) {
      return $localize`Страница 1 из 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return $localize`Страница ${page + 1} из ${amountPages}`;
  }
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  private paginator!: MatPaginator;
  @ViewChild(MatSort)
  private sort!: MatSort;

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

  // Set the paginator and sort after the view init
  ngAfterViewInit(): void {
    this.addTableObjects();
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

    this.addTableObjects();

    // category and priority contain objectsб not primitives
    // @ ts-ignore - data type error ↓↓↓, JUST IGNORE IT?
    this.dataSource.sortingDataAccessor = (task: any, colName) => {
      // sorting criteria for selected fields
      switch (colName) {
        case 'priority': {
          return task.priority ? task.priority.id : null;
        }
        case 'category': {
          return task.category ? task.category.title : null;
        }
        case 'date': {
          return task.date ? task.date : null;
        }

        case 'title': {
          return task.title;
        }
      }
    };
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  private addTableObjects() {
    this.dataSource.sort = this.sort; // data sorting
    this.dataSource.paginator = this.paginator; // upd paginator (num ofr records, pages)
  }
}
