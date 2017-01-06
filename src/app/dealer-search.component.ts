import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {DealerActions} from './actions';
import {Dealer} from './models';

import {DealerSearchService} from './services/dealer-search.service';


import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dealer-search',
    templateUrl: './dealer-search.component.html',
    styleUrls: ['./dealer-search.component.css'],
    providers: [DealerSearchService]
})
export class DealerSearchComponent implements OnInit {
    dealers: Observable<Dealer[]>;
    private searchTerms = new Subject<string>();
    public term: string;

    constructor(private dealerSearchService: DealerSearchService,
                private store: Store<AppState>,
                private dealerActions: DealerActions,
                private router: Router) {

        this.dealers = store.select('dealers');
    }

    search(term: string): void {
        // Push a search term into the observable stream.
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.searchTerms
            .debounceTime(100)        // wait for 300ms pause in events
            .distinctUntilChanged()
            .filter(term => term.length > 0)
            .subscribe(term => this.store.dispatch(this.dealerActions.loadDealers(term)));
    }

    gotoDetail(dealer: Dealer): void {
        let link = ['/detail', dealer.code];
        this.router.navigate(link);
    }
}
