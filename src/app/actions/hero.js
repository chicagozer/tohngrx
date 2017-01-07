"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroActions = (function () {
    function HeroActions() {
    }
    HeroActions.prototype.loadHeroes = function (search) {
        return {
            type: HeroActions.LOAD_HEROES,
            payload: search
        };
    };
    HeroActions.prototype.loadHeroesSuccess = function (heroes) {
        return {
            type: HeroActions.LOAD_HEROES_SUCCESS,
            payload: heroes
        };
    };
    HeroActions.prototype.getHero = function (id) {
        return {
            type: HeroActions.GET_HERO,
            payload: id
        };
    };
    HeroActions.prototype.getHeroSuccess = function (hero) {
        return {
            type: HeroActions.GET_HERO_SUCCESS,
            payload: hero
        };
    };
    HeroActions.prototype.resetBlankHero = function () {
        return {
            type: HeroActions.RESET_BLANK_HERO
        };
    };
    HeroActions.prototype.saveHero = function (hero) {
        return {
            type: HeroActions.SAVE_HERO,
            payload: hero
        };
    };
    HeroActions.prototype.saveHeroSuccess = function (hero) {
        return {
            type: HeroActions.SAVE_HERO_SUCCESS,
            payload: hero
        };
    };
    HeroActions.prototype.addHero = function (hero) {
        return {
            type: HeroActions.ADD_HERO,
            payload: hero
        };
    };
    HeroActions.prototype.addHeroSuccess = function (hero) {
        return {
            type: HeroActions.ADD_HERO_SUCCESS,
            payload: hero
        };
    };
    HeroActions.prototype.deleteHero = function (hero) {
        return {
            type: HeroActions.DELETE_HERO,
            payload: hero
        };
    };
    HeroActions.prototype.deleteHeroSuccess = function (hero) {
        return {
            type: HeroActions.DELETE_HERO_SUCCESS,
            payload: hero
        };
    };
    HeroActions.LOAD_HEROES = '[Dealer] Load Dealers';
    HeroActions.LOAD_HEROES_SUCCESS = '[Dealer] Load Dealers Success';
    HeroActions.GET_HERO = '[Dealer] Get Dealer';
    HeroActions.GET_HERO_SUCCESS = '[Dealer] Get Dealer Success';
    HeroActions.RESET_BLANK_HERO = '[Dealer] Reset Blank Dealer';
    HeroActions.SAVE_HERO = '[Dealer] Save Dealer';
    HeroActions.ADD_HERO = '[Dealer] Add Dealer';
    HeroActions.SAVE_HERO_SUCCESS = '[Dealer] Save Dealer Success';
    HeroActions.ADD_HERO_SUCCESS = '[Dealer] Add Dealer Success';
    HeroActions.DELETE_HERO = '[Dealer] Delete Dealer';
    HeroActions.DELETE_HERO_SUCCESS = '[Dealer] Delete Dealer Success';
    HeroActions = __decorate([
        core_1.Injectable()
    ], HeroActions);
    return HeroActions;
}());
exports.HeroActions = HeroActions;
