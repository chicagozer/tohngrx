import {Action} from '@ngrx/store';
import {Dealer} from '../models';
import {DealerActions} from '../actions';
import * as _ from 'lodash';

export type DealerListState = Dealer[];

const initialState: DealerListState = [];

export default function (state = initialState, action: Action): DealerListState {
    switch (action.type) {
        case DealerActions.LOAD_DEALERS_SUCCESS: {
            return action.payload;
        }
        case DealerActions.ADD_DEALER_SUCCESS: {
            return [...state, action.payload];
        }
        case DealerActions.SAVE_DEALER_SUCCESS: {
            let index = _.findIndex(state, {code: action.payload.code});
            if (index >= 0) {
                return [
                    ...state.slice(0, index),
                    action.payload,
                    ...state.slice(index + 1)
                ];
            }
            return state;
        }
        case DealerActions.DELETE_DEALER_SUCCESS: {
            return state.filter(dealer => {
                return dealer.code !== action.payload.code;
            });
        }
        default: {
            return state;
        }
    }
}
