"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var effects_1 = require('@ngrx/effects');
var actions_1 = require('../actions');
var HeroEffects = (function () {
    function HeroEffects(update$, heroActions, svc) {
        var _this = this;
        this.update$ = update$;
        this.heroActions = heroActions;
        this.svc = svc;
        this.loadHeroes$ = this.update$
            .ofType(actions_1.HeroActions.LOAD_HEROES)
            .map(function (action) { return action.payload; })
            .switchMap(function (term) { return _this.svc.getHeroes(term); })
            .map(function (heroes) { return _this.heroActions.loadHeroesSuccess(heroes); });
        this.getHero$ = this.update$.ofType(actions_1.HeroActions.GET_HERO)
            .map(function (action) { return action.payload; })
            .switchMap(function (id) { return _this.svc.getHero(id); })
            .map(function (hero) { return _this.heroActions.getHeroSuccess(hero); });
        this.saveHero$ = this.update$
            .ofType(actions_1.HeroActions.SAVE_HERO)
            .map(function (action) { return action.payload; })
            .switchMap(function (hero) { return _this.svc.save(hero); })
            .map(function (hero) { return _this.heroActions.saveHeroSuccess(hero); });
        this.addHero$ = this.update$
            .ofType(actions_1.HeroActions.ADD_HERO)
            .map(function (action) { return action.payload; })
            .switchMap(function (hero) { return _this.svc.save(hero); })
            .map(function (hero) { return _this.heroActions.addHeroSuccess(hero); });
        this.deleteHero$ = this.update$
            .ofType(actions_1.HeroActions.DELETE_HERO)
            .map(function (action) { return action.payload; })
            .switchMap(function (hero) { return _this.svc.delete(hero); })
            .map(function (hero) { return _this.heroActions.deleteHeroSuccess(hero); });
    }
    __decorate([
        effects_1.Effect()
    ], HeroEffects.prototype, "loadHeroes$", void 0);
    __decorate([
        effects_1.Effect()
    ], HeroEffects.prototype, "getHero$", void 0);
    __decorate([
        effects_1.Effect()
    ], HeroEffects.prototype, "saveHero$", void 0);
    __decorate([
        effects_1.Effect()
    ], HeroEffects.prototype, "addHero$", void 0);
    __decorate([
        effects_1.Effect()
    ], HeroEffects.prototype, "deleteHero$", void 0);
    HeroEffects = __decorate([
        core_1.Injectable()
    ], HeroEffects);
    return HeroEffects;
}());
exports.HeroEffects = HeroEffects;
