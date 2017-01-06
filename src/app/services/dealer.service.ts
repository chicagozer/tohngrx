import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {PlatformLocation} from '@angular/common';
import {DealerSearchService} from './dealer-search.service';
import {Dealer} from '../models';

@Injectable()
export class DealerService {
  private dealersUrl;  // URL to web api

  constructor(private dealerSearchService: DealerSearchService, private http: Http, platformLocation: PlatformLocation) {
    this.dealersUrl = platformLocation.getBaseHrefFromDOM() + 'api/dealers/';
  }

  getDealers(term: string): Observable<Dealer[]> {
    // return this.http.get(this.dealersUrl).map((res: Response) => res.json().data);
    return this.dealerSearchService.search(term);
  }

  getDealer(id): Observable<Dealer> {

    return this.dealerSearchService.getDealer(id);
    // return this.http.get(this.dealersUrl + id).map((res: Response) => res.json().data);
  }

  save(dealer: Dealer): Observable<Dealer> {
    if (dealer.code) {
      return this.put(dealer);
    }
    return this.post(dealer);
  }

  delete(dealer: Dealer): Observable<Dealer> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.dealersUrl}${dealer.code}`;

    return this.http
      .delete(url, {headers: headers})
      .map(res => dealer);
  }

  // Add new Dealer
  private post(dealer: Dealer): Observable<Dealer> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.dealersUrl, JSON.stringify(dealer), {headers: headers})
      .map(res => res.json().data);
  }

  // Update existing Dealer
  private put(dealer: Dealer): Observable<Dealer> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.dealersUrl}${dealer.code}`;

    return this.http
      .put(url, JSON.stringify(dealer), {headers: headers})
      .map(() => dealer);
  }


}
