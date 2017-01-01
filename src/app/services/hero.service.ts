import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {PlatformLocation } from '@angular/common';


import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
  private heroesUrl;  // URL to web api

  constructor(private http: Http, platformLocation: PlatformLocation) {
    this.heroesUrl = platformLocation.getBaseHrefFromDOM() + 'api/heroes/';
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.heroesUrl)
      .map((res: Response) => res.json().data);
  }

  getHero(id): Observable<Hero> {
    return this.http.get(this.heroesUrl + id)
      .map((res: Response) => res.json().data);
  }

  save(hero: Hero): Observable<Hero> {
    if (hero.id) {
      return this.put(hero);
    }
    return this.post(hero);
  }

  delete(hero: Hero): Observable<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}${hero.id}`;

    return this.http
      .delete(url, { headers: headers })
      .map(res => hero);
  }

  // Add new Hero
  private post(hero: Hero): Observable<Hero> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.heroesUrl, JSON.stringify(hero), { headers: headers })
      .map(res => res.json().data);
  }

  // Update existing Hero
  private put(hero: Hero): Observable<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .map(() => hero);
  }


}
