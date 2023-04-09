import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinksService } from './services/links/links.service';
import { ILinks } from './models/links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Angular CRUD';
  links: ILinks[] = [];

  constructor(private route: Router, private menuLinks: LinksService) {}

  ngOnInit() {
    this.menuLinks.getLinks().subscribe((links) => (this.links = links));
  }

  logout() {
    this.route.navigateByUrl('login');
  }
}
