import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Dealer} from '../models';

@Injectable()
export class DealerActions {
    static LOAD_DEALERS = '[Dealer] Load Dealers';
  static LOAD_DEALERS_SUCCESS = '[Dealer] Load Dealers Success';
  static GET_DEALER = '[Dealer] Get Dealer';
  static GET_DEALER_SUCCESS = '[Dealer] Get Dealer Success';
  static RESET_BLANK_DEALER = '[Dealer] Reset Blank Dealer';
  static SAVE_DEALER = '[Dealer] Save Dealer';
  static ADD_DEALER = '[Dealer] Add Dealer';
  static SAVE_DEALER_SUCCESS = '[Dealer] Save Dealer Success';
  static ADD_DEALER_SUCCESS = '[Dealer] Add Dealer Success';
  static DELETE_DEALER = '[Dealer] Delete Dealer';
  static DELETE_DEALER_SUCCESS = '[Dealer] Delete Dealer Success';
  static GET_PROFILE_SUCCESS = '[Profile] Get Profile Success';

  setProfile(profile: gapi.auth2.BasicProfile): Action {
    return {
      type: DealerActions.GET_PROFILE_SUCCESS,
      payload: profile
    };
  }

  loadDealers(search: string): Action {
        return {
            type: DealerActions.LOAD_DEALERS,
            payload: search
        };
    }

    loadDealersSuccess(dealers: Dealer[]): Action {
        return {
            type: DealerActions.LOAD_DEALERS_SUCCESS,
            payload: dealers
        };
    }

    getDealer(id): Action {
        return {
            type: DealerActions.GET_DEALER,
            payload: id
        };
    }

    getDealerSuccess(dealer: Dealer): Action {
        return {
            type: DealerActions.GET_DEALER_SUCCESS,
            payload: dealer
        };
    }

    resetBlankDealer(): Action {
        return {
            type: DealerActions.RESET_BLANK_DEALER
        };
    }


    saveDealer(dealer: Dealer): Action {
        return {
            type: DealerActions.SAVE_DEALER,
            payload: dealer
        };
    }

    saveDealerSuccess(dealer: Dealer): Action {
        return {
            type: DealerActions.SAVE_DEALER_SUCCESS,
            payload: dealer
        };
    }

    addDealer(dealer: Dealer): Action {
        return {
            type: DealerActions.ADD_DEALER,
            payload: dealer
        };
    }

    addDealerSuccess(dealer: Dealer): Action {
        return {
            type: DealerActions.ADD_DEALER_SUCCESS,
            payload: dealer
        };
    }

    deleteDealer(dealer: Dealer): Action {
        return {
            type: DealerActions.DELETE_DEALER,
            payload: dealer
        };
    }

    deleteDealerSuccess(dealer: Dealer): Action {
        return {
            type: DealerActions.DELETE_DEALER_SUCCESS,
            payload: dealer
        };
    }
}
