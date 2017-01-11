import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, ResponseOptions, BaseRequestOptions } from '@angular/http';
import {Http,XHRBackend} from '@angular/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MaterialModule } from '@angular/material';

import './rxjs-extensions';
import { AppComponent } from './app.component';
import { AppRoutingModule, routedComponents } from './app-routing.module';
import { DealerService } from './services/dealer.service';
import { DealerSearchService } from './services/dealer-search.service';
import { DealerSearchComponent } from './dealer-search.component';
import {StoreModule} from '@ngrx/store';
import reducer from './reducers';
import {DealerActions} from './actions';
import {EffectsModule} from '@ngrx/effects';
import {DealerEffects} from './effects';
import {GoogleSignInComponent} from './google-signin';
import {DealerFormComponent} from './dealer-form.component';
import {EmptyComponent} from './empty.component';
import { LoggedInGuard} from './services/login.service';
import { Logger } from "angular2-logger/core";

@NgModule({
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DealerEffects)
  ],
  declarations: [
    AppComponent,
    GoogleSignInComponent,
    DealerSearchComponent,
    DealerFormComponent,
      EmptyComponent,
    routedComponents
  ],
  providers: [
    DealerActions, DealerService, DealerSearchService, LoggedInGuard,
       BaseRequestOptions, Logger,
   { provide: RequestOptions, useExisting: BaseRequestOptions } ,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
