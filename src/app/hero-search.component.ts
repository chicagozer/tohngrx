import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Store} from '@ngrx/store';
import {AppState} from './reducers';
import {HeroActions} from './actions';
import {Dealer} from './models';

import {HeroSearchService} from './services/hero-search.service';
import {Hero} from './models/hero';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-hero-search',
    templateUrl: './hero-search.component.html',
    styleUrls: ['./hero-search.component.css'],
    providers: [HeroSearchService]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();
    public term: string;

    constructor(private heroSearchService: HeroSearchService,
                private store: Store<AppState>,
                private heroActions: HeroActions,
                private router: Router) {

        this.heroes = store.select('heroes');
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
            .subscribe(term => this.store.dispatch(this.heroActions.loadHeroes(term)));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
