"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var HeroService = (function () {
    function HeroService(heroSearchService, http, platformLocation) {
        this.heroSearchService = heroSearchService;
        this.http = http;
        this.heroesUrl = platformLocation.getBaseHrefFromDOM() + 'api/heroes/';
    }
    HeroService.prototype.getHeroes = function (term) {
        // return this.http.get(this.heroesUrl).map((res: Response) => res.json().data);
        return this.heroSearchService.search(term);
    };
    HeroService.prototype.getHero = function (id) {
        return this.heroSearchService.getHero(id);
        // return this.http.get(this.heroesUrl + id).map((res: Response) => res.json().data);
    };
    HeroService.prototype.save = function (hero) {
        if (hero.id) {
            return this.put(hero);
        }
        return this.post(hero);
    };
    HeroService.prototype.delete = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.heroesUrl + hero.id;
        return this.http
            .delete(url, { headers: headers })
            .map(function (res) { return hero; });
    };
    // Add new Hero
    HeroService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
            .map(function (res) { return res.json().data; });
    };
    // Update existing Hero
    HeroService.prototype.put = function (hero) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = "" + this.heroesUrl + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: headers })
            .map(function () { return hero; });
    };
    HeroService = __decorate([
        core_1.Injectable()
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
