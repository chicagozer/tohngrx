import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import { Observable } from 'rxjs/Observable';
import { Dealer } from './models/dealer';
import {DealerActions} from './actions';
@Component({
  selector: 'app-dealer-detail',
  template: require('./dealer-detail.component.html')
})
export class DealerDetailComponent implements OnInit, OnDestroy {

  dealer: Observable<Dealer>;
  idSub: Subscription;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private dealerActions: DealerActions) {

    this.dealer = store.select('dealer');
  }

  ngOnInit(): void {
    this.idSub = this.route.params
      .select<string>('id')
      .subscribe(id => {
        if (id) {
          this.store.dispatch(this.dealerActions.getDealer(id));
          this.navigated = true;
        } else {
          this.store.dispatch(this.dealerActions.resetBlankDealer());
          this.navigated = false;
        }
      });
  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }


  save(dealer: Dealer): void {
    if (dealer.code === undefined) {
      this.store.dispatch(this.dealerActions.addDealer(dealer));
    } else {
      this.store.dispatch(this.dealerActions.saveDealer(dealer));
    }
    this.goBack(dealer);
  }

  goBack(savedDealer: Dealer = null): void {
    this.close.emit(savedDealer);
     if (this.navigated) { window.history.back(); }
  }
}
