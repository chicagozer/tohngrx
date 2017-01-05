import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';
import {Client, SearchResponse} from "elasticsearch";
import {Hero} from '../models/hero';

@Injectable()
export class HeroSearchService {

    private client: Client;

    constructor(private http: Http) {

        this.client = new Client({
            host: 'https://search-xtime-rztulzvbnfnzqismf3xqa7q6sy.us-west-1.es.amazonaws.com',
            log: 'info'
        });
    }




    getHero(code:string):Observable<Hero> {

        return this.query(`code:${code}`).map( list => list[0]);
        }

    //`name:${term}`

    search(name:string) : Observable<Hero[]> {
        return this.query(`name:${name} OR code:${name}`);
    }


    query(term: string): Observable<Hero[]> {

        var p: any = this.client.search({
            index: 'dealers',
            q: term
        });

        Object.defineProperty(p, 'Symbol.toStringTag', {value: 'Promise'});

      return Observable.fromPromise(p).map(( body : any ) => body.hits.hits.map( (x: any) => ({ id: x._source.code, name: x._source.name })));

/*
         return this.http
         .get(`app/heroes/?name=${term}`)
         .map((r: Response) => r.json().data as Hero[])
         .catch((error: any) => {
         console.error('An friendly error occurred', error);
         return Observable.throw(error.message || error);
         });*/
    }
}
