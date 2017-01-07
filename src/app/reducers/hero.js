"use strict";
var actions_1 = require('../actions');
var initialState = {
    name: ''
};
function default_1(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actions_1.HeroActions.RESET_BLANK_HERO: {
            return initialState;
        }
        case actions_1.HeroActions.GET_HERO_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
