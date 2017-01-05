import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';

import {HeroActions} from '../actions';
import {HeroService} from '../services';
import {Hero} from '../models';

@Injectable()
export class HeroEffects {
    constructor (
        private update$: Actions,
        private heroActions: HeroActions,
        private svc: HeroService,
    ) {}

    @Effect() loadHeroes$ = this.update$
        .ofType(HeroActions.LOAD_HEROES)
        .map(action => action.payload)
        .switchMap((term: String) => this.svc.getHeroes(term))
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes));

    @Effect() getHero$ = this.update$.ofType(HeroActions.GET_HERO)
      .map(action => action.payload)
      .switchMap(id => this.svc.getHero(id))
      .map((hero: Hero) => this.heroActions.getHeroSuccess(hero));


    @Effect() saveHero$ = this.update$
        .ofType(HeroActions.SAVE_HERO)
        .map(action => action.payload)
        .switchMap((hero: Hero) => this.svc.save(hero))
        .map(hero => this.heroActions.saveHeroSuccess(hero));

    @Effect() addHero$ = this.update$
        .ofType(HeroActions.ADD_HERO)
        .map(action => action.payload)
        .switchMap((hero: Hero) => this.svc.save(hero))
        .map((hero: Hero) => this.heroActions.addHeroSuccess(hero));

    @Effect() deleteHero$ = this.update$
        .ofType(HeroActions.DELETE_HERO)
        .map(action => action.payload)
        .switchMap((hero: Hero) => this.svc.delete(hero))
        .map((hero: Hero) => this.heroActions.deleteHeroSuccess(hero));
}
