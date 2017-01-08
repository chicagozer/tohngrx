import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {GoogleSignInSuccess} from 'angular-google-signin';
import {AppState} from './reducers';
import {DealerActions} from './actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template:  require('./app.component.html'),
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Dealers';
  googleClientId: string = '634708614922-678l2unvu6pbrd2loddatun5cjsdck58.apps.googleusercontent.com';
  profile: Observable<gapi.auth2.BasicProfile>;
  constructor(
    private store: Store<AppState>,
    private dealerActions: DealerActions
  ) {
    this.profile = store.select('profile');

  }

  ngOnInit() {
    this.store.dispatch(this.dealerActions.setProfile(null));
  }


   googleSignOut() {
     const auth2 = gapi.auth2.getAuthInstance();
     auth2.signOut().then( () => console.log('User signed out.'));
     this.store.dispatch(this.dealerActions.setProfile(null));
   }

  onGoogleSignInSuccess(event: GoogleSignInSuccess) {
    let googleUser: gapi.auth2.GoogleUser = event.googleUser;
    let id: string = googleUser.getId();
    console.log('ID: ' +
      googleUser.getBasicProfile()
        .getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + googleUser.getBasicProfile().getName());
    this.store.dispatch(this.dealerActions.setProfile(googleUser.getBasicProfile()));

  }
}
