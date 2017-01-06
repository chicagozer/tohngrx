import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/from';
import {Client, SearchResponse} from 'elasticsearch';
import {Dealer} from '../models';

@Injectable()
export class DealerSearchService {

  private client: Client;

  constructor(private http: Http) {

    this.client = new Client({
      host: 'https://search-xtime-rztulzvbnfnzqismf3xqa7q6sy.us-west-1.es.amazonaws.com',
      log: 'info'
    });
  }


  getDealer(code: string): Observable<Dealer> {

    return this.query(`code:${code}`).map(list => list[0]);
  }

  // `name:${term}`

  search(name: string): Observable<Dealer[]> {
    return this.query(`name:${name} OR code:${name}`);
  }


  query(term: string): Observable<Dealer[]> {

    const p: PromiseLike<SearchResponse<Dealer>> = this.client.search({
      index: 'dealers',
      q: term
    });

    Object.defineProperty(p, 'Symbol.toStringTag', {value: 'Promise'});

    // this is a bit weird. We are using Observable map but also hits.hits.map to transform internal array members to Dealeres
    return Observable.fromPromise(p as Promise<SearchResponse<Dealer>>).map((body: SearchResponse<Dealer>) => body.hits.hits.map((x) => (x._source)));


    /*
     return this.http
     .get(`app/heroes/?name=${term}`)
     .map((r: Response) => r.json().data as Dealer[])
     .catch((error: any) => {
     console.error('An friendly error occurred', error);
     return Observable.throw(error.message || error);
     });*/
  }
}
