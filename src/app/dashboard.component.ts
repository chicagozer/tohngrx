import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {Hero} from "./models/hero";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {AppState} from "./reducers";
import {HeroActions} from "./actions";
@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Observable<Hero[]>;

  constructor(private router: Router,
              private store: Store<AppState>,
              private heroActions: HeroActions) {
    this.heroes = store.select('heroes');
  }


  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
