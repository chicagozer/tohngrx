"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(store, heroActions) {
        this.store = store;
        this.heroActions = heroActions;
        this.title = 'Tour of Dealers';
        this.googleClientId = '634708614922-678l2unvu6pbrd2loddatun5cjsdck58.apps.googleusercontent.com';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.heroActions.loadHeroes('*'));
    };
    AppComponent.prototype.googleSignOut = function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () { return console.log('User signed out.'); });
        this.profile = null;
    };
    AppComponent.prototype.onGoogleSignInSuccess = function (event) {
        var googleUser = event.googleUser;
        var id = googleUser.getId();
        this.profile = googleUser.getBasicProfile();
        console.log('ID: ' +
            this.profile
                .getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + this.profile.getName());
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: require('./app.component.html'),
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
