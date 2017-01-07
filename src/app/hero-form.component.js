"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var HeroFormComponent = (function () {
    function HeroFormComponent() {
        this.goBack = new core_1.EventEmitter();
        this.save = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Input()
    ], HeroFormComponent.prototype, "hero", void 0);
    __decorate([
        core_1.Output()
    ], HeroFormComponent.prototype, "goBack", void 0);
    __decorate([
        core_1.Output()
    ], HeroFormComponent.prototype, "save", void 0);
    HeroFormComponent = __decorate([
        core_1.Component({
            selector: 'app-hero-form',
            template: require('./hero-form.component.html'),
            styles: [require('./hero-form.component.css')]
        })
    ], HeroFormComponent);
    return HeroFormComponent;
}());
exports.HeroFormComponent = HeroFormComponent;
