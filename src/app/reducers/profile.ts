import {Action} from '@ngrx/store';
import { Profile } from '../models';
import {DealerActions} from '../actions';

export type ProfileState = Profile;



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
