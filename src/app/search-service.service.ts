import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchServiceService {

  apiRoot = 'https://itunes.apple.com/search';
  results: RootObject[];
  loading: boolean;

  // konstruktor se prvi izvrsava!!!
  constructor(private http:
    HttpClient) {
      this.loading = false;
      this.results = [];
    }

    // async await
    async search(term: string): Promise<RootObject[]> {
      const apiURL = `${this.apiRoot}?term=${term}&media=music&limit=50`;

      const ids = await this.http.get(apiURL).map(res => this.results = res as RootObject[]).toPromise();

      return ids;

    }

  }

  // interface
  export interface RootObject {
    resultCount: number;
    results: Result[];
  }

  interface Result {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    collectionArtistId?: number;
    collectionArtistName?: string;
    collectionArtistViewUrl?: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
  }



