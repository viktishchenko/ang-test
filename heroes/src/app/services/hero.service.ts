import { Injectable } from '@angular/core';
import { IHero } from '../models/hero';
import { HEROES } from '../data/mack-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): IHero[] {
    return HEROES;
  }
}
