import {Action} from '@ngrx/store';

import {Dealer} from '../models';
import {DealerActions} from '../actions';

export type DealerState = Dealer;

const initialState: DealerState = {
    name: ''
};

export default function (state = initialState, action: Action): DealerState {
    switch (action.type) {
        case DealerActions.RESET_BLANK_DEALER: {
            return initialState;
        }
        case DealerActions.GET_DEALER_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
