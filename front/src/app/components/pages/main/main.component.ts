import { Component, OnInit } from '@angular/core';
import { ITitle } from 'src/app/models/title';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  title: ITitle[] = [];

  constructor(private getTitle: DataService) {}
  ngOnInit(): void {
    this.getTitle.getTitleData().subscribe((t) => (this.title = t));
  }
}
