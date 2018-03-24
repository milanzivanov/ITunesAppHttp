import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from '../search-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  private artist: any;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
          // console.log(params);
          this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}`).toPromise().then(res => {
            // this.albums = res.results.slice(1);
            this.artist = res;
            console.log(res);
            console.log(this.artist);
          });
        });
    }

  ngOnInit() {
  }

}
