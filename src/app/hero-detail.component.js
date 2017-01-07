"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(store, route, heroActions) {
        this.store = store;
        this.route = route;
        this.heroActions = heroActions;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
        this.hero = store.select('hero');
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.idSub = this.route.params
            .select('id')
            .subscribe(function (id) {
            if (id) {
                _this.store.dispatch(_this.heroActions.getHero(id));
                _this.navigated = true;
            }
            else {
                _this.store.dispatch(_this.heroActions.resetBlankHero());
                _this.navigated = false;
            }
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this.idSub.unsubscribe();
    };
    HeroDetailComponent.prototype.save = function (hero) {
        if (hero.id === undefined) {
            this.store.dispatch(this.heroActions.addHero(hero));
        }
        else {
            this.store.dispatch(this.heroActions.saveHero(hero));
        }
        this.goBack(hero);
    };
    HeroDetailComponent.prototype.goBack = function (savedHero) {
        if (savedHero === void 0) { savedHero = null; }
        this.close.emit(savedHero);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Output()
    ], HeroDetailComponent.prototype, "close", void 0);
    HeroDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-detail',
            template: require('./hero-detail.component.html')
        })
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
