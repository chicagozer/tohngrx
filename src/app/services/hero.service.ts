import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { Hero } from '../models/hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Observable<Hero[]> {
    return this.http.get('/api/heroes')
      .map((res: Response) => res.json().data);
  }

  getHero(id): Observable<Hero> {
    return this.http.get('/api/heroes/' + id)
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

    let url = `${this.heroesUrl}/${hero.id}`;

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
      .map(res => res.json());
  }

  // Update existing Hero
  private put(hero: Hero): Observable<Hero> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .map(res => res.json());
  }


}
