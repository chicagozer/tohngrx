"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
require('rxjs/add/operator/catch');
require('rxjs/add/observable/throw');
require('rxjs/add/observable/fromPromise');
var elasticsearch_1 = require('elasticsearch');
var HeroSearchService = (function () {
    function HeroSearchService(http) {
        this.http = http;
        this.client = new elasticsearch_1.Client({
            host: 'https://search-xtime-rztulzvbnfnzqismf3xqa7q6sy.us-west-1.es.amazonaws.com',
            log: 'info'
        });
    }
    HeroSearchService.prototype.getHero = function (code) {
        return this.query("code:" + code).map(function (list) { return list[0]; });
    };
    // `name:${term}`
    HeroSearchService.prototype.search = function (name) {
        return this.query("name:" + name + " OR code:" + name);
    };
    HeroSearchService.prototype.query = function (term) {
        var p = this.client.search({
            index: 'dealers',
            q: term,
            size: 12
        });
        Object.defineProperty(p, 'Symbol.toStringTag', { value: 'Promise' });
        return Observable_1.Observable.fromPromise(p).map(function (body) { return body.hits.hits.map(function (x) { return ({
            id: x._source.code,
            name: x._source.name
        }); }); });
        /*
         return this.http
         .get(`app/heroes/?name=${term}`)
         .map((r: Response) => r.json().data as Hero[])
         .catch((error: any) => {
         console.error('An friendly error occurred', error);
         return Observable.throw(error.message || error);
         });*/
    };
    HeroSearchService = __decorate([
        core_1.Injectable()
    ], HeroSearchService);
    return HeroSearchService;
}());
exports.HeroSearchService = HeroSearchService;
