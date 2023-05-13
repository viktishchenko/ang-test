import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IHero } from '../models/hero';
import { HEROES } from '../data/mack-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
