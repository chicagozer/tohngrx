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
@NgModule({
  imports: [
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(DealerEffects),
    InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 600 })
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
    DealerActions, DealerService, DealerSearchService, LoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
