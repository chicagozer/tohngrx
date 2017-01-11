import {Component, AfterViewInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {BaseRequestOptions} from '@angular/http';
import {Logger} from 'angular2-logger';
import *  as jwtDecode from "jwt-decode";
export class GoogleSignInSuccess {
    public googleUser: gapi.auth2.GoogleUser;

    constructor(private options: BaseRequestOptions, googleUser: gapi.auth2.GoogleUser) {
        this.googleUser = googleUser;
        options.headers.set('Authorization', `Bearer ${googleUser.getAuthResponse().id_token}`);
    }
}

export class GoogleSignInFailure {
    constructor(private options: BaseRequestOptions)
    {
        options.headers.delete('Authorization');
    }
}

@Component({
    selector: 'google-signin',
    template: '<div [id]="id"></div>',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleSignInComponent implements AfterViewInit {


    constructor(private logger: Logger,
                private httpoptions: BaseRequestOptions) {
    }

    private id: string = 'google-signin2';

    // Render options
    @Input() private scope: string;

    private _width: number;

    get width(): string {
        return this._width.toString();
    }

    @Input() set width(value: string) {
        this._width = Number(value);
    }

    private _height: number;

    get height(): string {
        return this._height.toString();
    }

    @Input() set height(value: string) {
        this._height = Number(value);
        gapi.load('', '');
    }

    private _longTitle: boolean;

    get longTitle(): string {
        return this._longTitle.toString();
    }

    @Input() set longTitle(value: string) {
        this._longTitle = Boolean(value);
    }

    @Input() private theme: string;

    // Init params
    @Input() private clientId: string;
    @Input() private cookiePolicy: string;

    private _fetchBasicProfile: boolean;

    get fetchBasicProfile(): string {
        return this._fetchBasicProfile.toString();
    }

    @Input() set fetchBasicProfile(s: string) {
        this._fetchBasicProfile = Boolean(s);
    }

    @Input() private hostedDomain: string;
    @Input() private openidRealm: string;

    @Output() googleSignInSuccess: EventEmitter<GoogleSignInSuccess> = new EventEmitter<GoogleSignInSuccess>();

    @Output() googleSignInFailure: EventEmitter<GoogleSignInFailure> = new EventEmitter<GoogleSignInFailure>();

    ngAfterViewInit() {
        this.auth2Init();

    }

    private auth2Init() {
        if (this.clientId == null)
            throw new Error(
                'clientId property is necessary. (<google-signin [clientId]="..."></google-signin>)');

        gapi.load('auth2', () => {
            gapi.auth2.init({
                client_id: this.clientId,
                cookie_policy: this.cookiePolicy,
                scope: 'email',
                fetch_basic_profile: false, //this._fetchBasicProfile,
                hosted_domain: this.hostedDomain,
                openid_realm: this.openidRealm
            }).then(() => {
                if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                    // we don't seem to need to trigger this
                    // this.handleSuccess(gapi.auth2.getAuthInstance().currentUser.get());
                }
            }, function (reason) {
                this.logger.error(reason); // Error!
            }).then(() => this.renderButton());

        })
    };

    private handleFailure() {
        this.googleSignInFailure.next(new GoogleSignInFailure(this.httpoptions));
    }

    private dumpUser(googleUser: gapi.auth2.GoogleUser) {
        this.logger.info('token:' + googleUser.getAuthResponse().id_token);
        this.logger.info('expiry:' + googleUser.getAuthResponse().expires_at);
        this.logger.info('id:' + googleUser.getId());
        this.logger.info('is signed in:' + googleUser.isSignedIn());
         this.logger.info('email:' + jwtDecode(googleUser.getAuthResponse().id_token).email);

    }

    private handleSuccess(googleUser: gapi.auth2.GoogleUser) {
        this.dumpUser(googleUser);


        this.googleSignInSuccess.next(new GoogleSignInSuccess(this.httpoptions,googleUser));

        // register a listener to see if we get notification when the token is refreshed
        gapi.auth2.getAuthInstance().currentUser.listen((googleUser: gapi.auth2.GoogleUser) => {
            if (googleUser.isSignedIn()) this.handleSuccess(googleUser)
            else this.handleFailure();
        });

    }

    private renderButton() {
        gapi.signin2.render(
            this.id, {
                scope: 'email', //this.scope,
                width: this._width,
                height: this._height,
                longtitle: this._longTitle,
                theme: this.theme,
                onsuccess: (googleUser: gapi.auth2.GoogleUser) => this.handleSuccess(googleUser),
                onfailure: () => this.handleFailure()
            });
    }
}
