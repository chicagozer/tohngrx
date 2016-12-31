import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';

import { Hero } from './models/hero';
import {HeroActions} from './actions';
@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnDestroy {

  hero: Hero;
  idSub: Subscription;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private heroActions: HeroActions) {

    // we have to remove the observable to get the template to work
    // probably should go to a form the way rxheroes does it
    store.select('hero').subscribe((h: Hero) => this.hero = h);
  }

  ngOnInit(): void {
    this.idSub = this.route.params
      .select<string>('id')
      .subscribe(id => {
        if (id) {
          this.store.dispatch(this.heroActions.getHero(id));
          this.navigated = true;
        } else {
          this.store.dispatch(this.heroActions.resetBlankHero());
          this.navigated = false;
        }
      });
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }


  save(hero: Hero): void {
    if (hero.id === undefined) {
      this.store.dispatch(this.heroActions.addHero(hero));
    } else {
      this.store.dispatch(this.heroActions.saveHero(hero));
    }
    this.goBack(hero);
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
}
