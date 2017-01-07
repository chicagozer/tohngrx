"use strict";
require('@ngrx/core/add/operator/select');
var compose_1 = require('@ngrx/core/compose');
// import {storeLogger} from 'ngrx-store-logger';
var store_1 = require('@ngrx/store');
var hero_list_1 = require('./hero-list'), fromHeroList = hero_list_1;
var hero_1 = require('./hero'), fromHero = hero_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = compose_1.compose(store_1.combineReducers)({
    heroes: hero_list_1.default,
    hero: hero_1.default
});
