import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Dealer} from './models';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {DealerActions} from './actions';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dealers: Observable<Dealer[]>;

  constructor(private router: Router,
              private store: Store<AppState>,
              private dealerActions: DealerActions) {
    this.dealers = store.select('dealers');
  }


  gotoDetail(dealer: Dealer): void {
    let link = ['/detail', dealer.code];
    this.router.navigate(link);
  }
}
