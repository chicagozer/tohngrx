"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var hero_search_service_1 = require('./services/hero-search.service');
require('rxjs/add/observable/of');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, store, heroActions, router) {
        this.heroSearchService = heroSearchService;
        this.store = store;
        this.heroActions = heroActions;
        this.router = router;
        this.searchTerms = new Subject_1.Subject();
        this.heroes = store.select('heroes');
    }
    HeroSearchComponent.prototype.search = function (term) {
        // Push a search term into the observable stream.
        this.searchTerms.next(term);
    };
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTerms
            .debounceTime(100) // wait for 300ms pause in events
            .distinctUntilChanged()
            .filter(function (term) { return term.length > 0; })
            .subscribe(function (term) { return _this.store.dispatch(_this.heroActions.loadHeroes(term)); });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-search',
            templateUrl: './hero-search.component.html',
            styleUrls: ['./hero-search.component.css'],
            providers: [hero_search_service_1.HeroSearchService]
        })
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
