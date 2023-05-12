import { Injectable } from '@angular/core';
import { IHero } from '../models/hero';
import { HEROES } from '../data/mack-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<IHero[]> {
    return of(HEROES);
  }
}
