import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { IHero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-search',
  template: `
    <div id="search-component">
      <label for="search-box">Hero Search</label>
      <input #searchBox id="search-box" (input)="search(searchBox.value)" />
      <ul class="search-result">
        <li *ngFor="let hero of heroes$ | async">
          <a routerLink="/detail/{{ hero.id }}">
            {{ hero.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: [
    `
      /* HeroSearch private styles */
      #search-component {
        position: relative;
        padding: 0 0 1rem;
      }
      label {
        display: block;
        font-weight: bold;
        font-size: 1.2rem;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
      }
      input {
        padding: 0.5rem;
        width: 100%;
        max-width: 600px;
        box-sizing: border-box;
        display: block;
      }

      input:focus {
        outline: #336699 auto 1px;
      }

      li {
        list-style-type: none;
      }
      .search-result {
        position: absolute;
        z-index: 999;
        background: #f7f7f7;
        max-width: 600px;
        width: 100%;
        max-height: 50vh;
        overflow-y: auto;
      }
      .search-result li a {
        border-bottom: 1px solid gray;
        border-left: 1px solid gray;
        border-right: 1px solid gray;
        display: inline-block;
        width: 100%;
        max-width: 600px;
        padding: 0.5rem;
        box-sizing: border-box;
        text-decoration: none;
        color: black;
      }

      .search-result li a:hover {
        background-color: #435a60;
        color: white;
      }

      ul.search-result {
        margin-top: 0;
        padding-left: 0;
      }
    `,
  ],
})
export class HeroSearchComponent implements OnInit {
  // heroes$!: Observable<IHero[]>;
  heroes$: Observable<IHero[]> | undefined;
  private searchTerm = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // push a search term into the observable stream
  search(term: string) {
    this.searchTerm.next(term);
  }

  ngOnInit() {
    this.heroes$ = this.searchTerm.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      //ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }
}
