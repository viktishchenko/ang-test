import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { links } from 'src/app/data/appData';
import { ILinks } from 'src/app/models/links';

@Injectable({
  providedIn: 'root',
})
export class LinksService {
  constructor() {}

  getLinks(): Observable<ILinks[]> {
    return of(links);
  }
}
