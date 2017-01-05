import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import { Hero } from './models/hero';
import { HeroService } from './services/hero.service';
import {HeroActions} from './actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {
  heroes: Observable<Hero[]>;
  selectedHero: Hero;
  addingHero = false;
  error: any;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private heroActions: HeroActions) {
    this.heroes = store.select('heroes');
  }



  addHero(): void {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero): void {
    this.addingHero = false;

  }

  deleteHero(hero: Hero, event: any): void {
    event.stopPropagation();
this.store.dispatch(this.heroActions.deleteHero(hero));
  }



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.addingHero = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
