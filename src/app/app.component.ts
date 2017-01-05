import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from './reducers';
import {HeroActions} from './actions';
@Component({
  selector: 'app-root',
  template:  require('./app.component.html'),
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Dealers';
  constructor(
    private store: Store<AppState>,
    private heroActions: HeroActions
  ) {}

  ngOnInit() {
    this.store.dispatch(this.heroActions.loadHeroes('*'));
  }
}
