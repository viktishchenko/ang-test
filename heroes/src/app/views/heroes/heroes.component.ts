import { Component } from '@angular/core';
import { HEROES } from 'src/app/data/mack-heroes';
import { IHero } from 'src/app/models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes = HEROES;
  selected: boolean = false;
  selectedHero?: IHero;

  onSelect(hero: IHero) {
    this.selectedHero = hero;
  }
}
