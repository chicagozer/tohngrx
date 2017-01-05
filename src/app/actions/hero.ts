import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Hero} from '../models';

@Injectable()
export class HeroActions {
    static LOAD_HEROES = '[Dealer] Load Dealers';
  static LOAD_HEROES_SUCCESS = '[Dealer] Load Dealers Success';
  static GET_HERO = '[Dealer] Get Dealer';
  static GET_HERO_SUCCESS = '[Dealer] Get Dealer Success';
  static RESET_BLANK_HERO = '[Dealer] Reset Blank Dealer';
  static SAVE_HERO = '[Dealer] Save Dealer';
  static ADD_HERO = '[Dealer] Add Dealer';
  static SAVE_HERO_SUCCESS = '[Dealer] Save Dealer Success';
  static ADD_HERO_SUCCESS = '[Dealer] Add Dealer Success';
  static DELETE_HERO = '[Dealer] Delete Dealer';
  static DELETE_HERO_SUCCESS = '[Dealer] Delete Dealer Success';

  loadHeroes(search: String): Action {
        return {
            type: HeroActions.LOAD_HEROES,
            payload: search
        };
    }

    loadHeroesSuccess(heroes: Hero[]): Action {
        return {
            type: HeroActions.LOAD_HEROES_SUCCESS,
            payload: heroes
        };
    }

    getHero(id): Action {
        return {
            type: HeroActions.GET_HERO,
            payload: id
        };
    }

    getHeroSuccess(hero: Hero): Action {
        return {
            type: HeroActions.GET_HERO_SUCCESS,
            payload: hero
        };
    }

    resetBlankHero(): Action {
        return {
            type: HeroActions.RESET_BLANK_HERO
        };
    }


    saveHero(hero: Hero): Action {
        return {
            type: HeroActions.SAVE_HERO,
            payload: hero
        };
    }

    saveHeroSuccess(hero: Hero): Action {
        return {
            type: HeroActions.SAVE_HERO_SUCCESS,
            payload: hero
        };
    }

    addHero(hero: Hero): Action {
        return {
            type: HeroActions.ADD_HERO,
            payload: hero
        };
    }

    addHeroSuccess(hero: Hero): Action {
        return {
            type: HeroActions.ADD_HERO_SUCCESS,
            payload: hero
        };
    }

    deleteHero(hero: Hero): Action {
        return {
            type: HeroActions.DELETE_HERO,
            payload: hero
        };
    }

    deleteHeroSuccess(hero: Hero): Action {
        return {
            type: HeroActions.DELETE_HERO_SUCCESS,
            payload: hero
        };
    }
}
