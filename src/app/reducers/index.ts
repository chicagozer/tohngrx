import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
// import {storeLogger} from 'ngrx-store-logger';
import {combineReducers} from '@ngrx/store';

import dealerListReducer, * as fromDealerList from './dealer-list';
import dealerReducer, * as fromDealer from './dealer';

export interface AppState {
    dealers: fromDealerList.DealerListState;
    dealer: fromDealer.DealerState;
}

// uncomment the storeLogger import and this line
// and comment out the other export default line to turn on
// the store logger to see the actions as they flow through the store
// turned this off by default as i found the logger kinda noisy

// export default compose(storeLogger(), combineReducers)({
export default compose(combineReducers)({
    dealers: dealerListReducer,
    dealer: dealerReducer
});


