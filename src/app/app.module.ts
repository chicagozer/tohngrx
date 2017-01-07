import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MaterialModule } from '@angular/material';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { HeroService } from './services/hero.service';
import { HeroSearchService } from './services/hero-search.service';
import { HeroSearchComponent } from './hero-search.component';
import {StoreModule} from '@ngrx/store';
import reducer from './reducers';
import {HeroActions} from './actions';
import {EffectsModule} from '@ngrx/effects';
import {HeroEffects} from './effects';
import {HeroFormComponent} from './hero-form.component';
import {GoogleSignInComponent} from 'angular-google-signin';

@NgModule({
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(HeroEffects),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
  ],
  declarations: [
    AppComponent,
    HeroSearchComponent,
    HeroFormComponent,
    GoogleSignInComponent,
    routedComponents
  ],
  providers: [
    HeroActions, HeroService, HeroSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
