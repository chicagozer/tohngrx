import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Hero} from '../models';

@Injectable()
export class HeroActions {
    static LOAD_HEROES = '[Hero] Load Heroes';
  static LOAD_HEROES_SUCCESS = '[Hero] Load Heroes Success';
  static GET_HERO = '[Hero] Get Hero';
  static GET_HERO_SUCCESS = '[Hero] Get Hero Success';
  static RESET_BLANK_HERO = '[Hero] Reset Blank Hero';
  static SAVE_HERO = '[Hero] Save Hero';
  static ADD_HERO = '[Hero] Add Hero';
  static SAVE_HERO_SUCCESS = '[Hero] Save Hero Success';
  static ADD_HERO_SUCCESS = '[Hero] Add Hero Success';
  static DELETE_HERO = '[Hero] Delete Hero';
  static DELETE_HERO_SUCCESS = '[Hero] Delete Hero Success';

  loadHeroes(): Action {
        return {
            type: HeroActions.LOAD_HEROES
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
