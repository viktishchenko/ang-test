import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  menu: IMenu[] = [];

  constructor(private menuLinks: MenuService) {}
  ngOnInit(): void {
    this.menuLinks.getLinks().subscribe((menu) => (this.menu = menu));
  }
}
