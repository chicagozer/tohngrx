"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var store_devtools_1 = require('@ngrx/store-devtools');
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('./in-memory-data.service');
var material_1 = require('@angular/material');
require('./rxjs-extensions');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
var hero_service_1 = require('./services/hero.service');
var hero_search_service_1 = require('./services/hero-search.service');
var hero_search_component_1 = require('./hero-search.component');
var store_1 = require('@ngrx/store');
var reducers_1 = require('./reducers');
var actions_1 = require('./actions');
var effects_1 = require('@ngrx/effects');
var effects_2 = require('./effects');
var hero_form_component_1 = require('./hero-form.component');
var angular_google_signin_1 = require('angular-google-signin');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MaterialModule.forRoot(),
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                store_1.StoreModule.provideStore(reducers_1.default),
                store_devtools_1.StoreDevtoolsModule.instrumentOnlyWithExtension(),
                effects_1.EffectsModule.run(effects_2.HeroEffects),
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService, { delay: 600 })
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_search_component_1.HeroSearchComponent,
                hero_form_component_1.HeroFormComponent,
                angular_google_signin_1.GoogleSignInComponent,
                app_routing_module_1.routedComponents
            ],
            providers: [
                actions_1.HeroActions, hero_service_1.HeroService, hero_search_service_1.HeroSearchService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
