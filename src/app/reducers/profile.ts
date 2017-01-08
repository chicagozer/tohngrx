import {Action} from '@ngrx/store';

import {DealerActions} from '../actions';

export type ProfileState = gapi.auth2.BasicProfile;

const initialState: ProfileState = null;

export default function (state = initialState, action: Action): ProfileState {
    switch (action.type) {

        case DealerActions.GET_PROFILE_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
