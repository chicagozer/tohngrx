import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import { Dealer } from './models';
import { DealerService } from './services/dealer.service';
import {DealerActions} from './actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent  {
  dealers: Observable<Dealer[]>;
  selectedDealer: Dealer;
  addingDealer = false;
  error: any;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private dealerActions: DealerActions) {
    this.dealers = store.select('dealers');
  }



  addDealer(): void {
    this.addingDealer = true;
    this.selectedDealer = null;
  }

  close(savedDealer: Dealer): void {
    this.addingDealer = false;

  }

  deleteDealer(dealer: Dealer, event: any): void {
    event.stopPropagation();
this.store.dispatch(this.dealerActions.deleteDealer(dealer));
  }



  onSelect(dealer: Dealer): void {
    this.selectedDealer = dealer;
    this.addingDealer = false;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedDealer.code]);
  }
}
