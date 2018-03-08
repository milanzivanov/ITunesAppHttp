import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchServiceService {

  apiRoot = 'https://itunes.apple.com/search';
  // results: any;
  results: Object[];
  loading: boolean;

  // question???
  constructor(private http:
    HttpClient) {
    this.results = [];
    this.loading = false;
  }

  // promises
  search(term: string) {
    const promise = new Promise((resolve, reject) => {
      //
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http.get(apiURL)
          .toPromise()
          .then( res => {
            // this.results = res;
            this.results = res as Object[];
            console.log(res);
          }
          );
          resolve();
        }
  );
    return promise;
  }

}
