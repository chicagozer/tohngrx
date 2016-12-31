import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {AppState} from './reducers';
import {HeroActions} from './actions';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  constructor(
    private store: Store<AppState>,
    private heroActions: HeroActions
  ) {}

  ngOnInit() {
    this.store.dispatch(this.heroActions.loadHeroes());
  }
}
