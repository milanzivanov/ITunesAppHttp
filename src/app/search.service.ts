import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

// domain model
export class SearchItem {
  constructor(public track: string,
              public artist: string,
              public link: string,
              public thumbnail: string,
              public artistId: string) {
  }
}

@Injectable()
export class SearchService {

  apiRoot = 'https://itunes.apple.com/search';
  posts: SearchItem[];
  constructor(private http: HttpClient) { }

  search(term: string): Observable<SearchItem[]> {
    const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;

    return this.http.get(apiURL)
    .map(result => {
      const set = result as {results: any[]};
      console.log(result);
      return set.results
                .map(res => new SearchItem (
                    res.trackName,
                    res.artistName,
                    res.link,
                    res.thumbnail,
                    res.track));
    });
  }




}
