import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {DealerActions} from '../actions';
import {DealerService} from '../services';
import {Dealer} from '../models';
import { Router } from '@angular/router';

@Injectable()
export class DealerEffects {
    constructor (
        private update$: Actions,
        private dealerActions: DealerActions,
        private svc: DealerService,
        private router: Router
    ) {}


    @Effect({ dispatch: false }) setProfile$ = this.update$
      .ofType(DealerActions.GET_PROFILE_SUCCESS)
      .map(action => action.payload)
    //  .filter((profile: gapi.auth2.BasicProfile) => (profile == null))
      .map((profile) =>  this.router.navigate([ (profile) ? '/dashboard' : '/']) );

    @Effect() loadDealers$ = this.update$
        .ofType(DealerActions.LOAD_DEALERS)
        .map(action => action.payload)
        .switchMap((term: string) => this.svc.getDealers(term))
        .map(dealers => this.dealerActions.loadDealersSuccess(dealers));

    @Effect() getDealer$ = this.update$.ofType(DealerActions.GET_DEALER)
      .map(action => action.payload)
      .switchMap(id => this.svc.getDealer(id))
      .map((dealer: Dealer) => this.dealerActions.getDealerSuccess(dealer));


    @Effect() saveDealer$ = this.update$
        .ofType(DealerActions.SAVE_DEALER)
        .map(action => action.payload)
        .switchMap((dealer: Dealer) => this.svc.save(dealer))
        .map(dealer => this.dealerActions.saveDealerSuccess(dealer));

    @Effect() addDealer$ = this.update$
        .ofType(DealerActions.ADD_DEALER)
        .map(action => action.payload)
        .switchMap((dealer: Dealer) => this.svc.save(dealer))
        .map((dealer: Dealer) => this.dealerActions.addDealerSuccess(dealer));

    @Effect() deleteDealer$ = this.update$
        .ofType(DealerActions.DELETE_DEALER)
        .map(action => action.payload)
        .switchMap((dealer: Dealer) => this.svc.delete(dealer))
        .map((dealer: Dealer) => this.dealerActions.deleteDealerSuccess(dealer));
}
