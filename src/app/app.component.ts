import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GoogleSignInSuccess} from './google-signin';
import {AppState} from './reducers';
import {DealerActions} from './actions';
import {Observable} from 'rxjs/Observable';
import {BaseRequestOptions} from "@angular/http";
import {Logger} from 'angular2-logger';
import * as jwtDecode from "jwt-decode";
@Component({
  selector: 'app-root',
  template:  require('./app.component.html'),
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Dealers';
  googleClientId: string = '634708614922-678l2unvu6pbrd2loddatun5cjsdck58.apps.googleusercontent.com';
  googleAuthScope: string = 'email';
  googleFetchBasicProfile: boolean = false;
  profile: Observable<gapi.auth2.GoogleUser>;
  constructor(
      private logger: Logger,
    private store: Store<AppState>,
    private dealerActions: DealerActions,
    private httpoptions: BaseRequestOptions
  ) {
    this.profile = store.select('profile');
    //store.select('profile').subscribe(x => console.log('next ' + JSON.stringify(x) ));

  }

  ngOnInit() {
      this.logger.level = this.logger.Level.LOG;
    this.store.dispatch(this.dealerActions.setProfile(null));
  }

// TODO move these to login service
   googleSignOut() {
     const auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then( () => this.logger.info('User signed out.'));
     //this.httpoptions.headers.delete('Authorization');

     this.store.dispatch(this.dealerActions.setProfile(null));
   }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();

   this.store.dispatch(this.dealerActions.setProfile(jwtDecode(googleUser.getAuthResponse().id_token)));

  }
}
