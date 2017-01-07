"use strict";
var actions_1 = require('../actions');
var _ = require('lodash');
var initialState = [];
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.HeroActions.LOAD_HEROES_SUCCESS: {
            return action.payload;
        }
        case actions_1.HeroActions.ADD_HERO_SUCCESS: {
            return state.concat([action.payload]);
        }
        case actions_1.HeroActions.SAVE_HERO_SUCCESS: {
            var index = _.findIndex(state, { id: action.payload.id });
            if (index >= 0) {
                return state.slice(0, index).concat([
                    action.payload
                ], state.slice(index + 1));
            }
            return state;
        }
        case actions_1.HeroActions.DELETE_HERO_SUCCESS: {
            return state.filter(function (hero) {
                return hero.id !== action.payload.id;
            });
        }
        default: {
            return state;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
