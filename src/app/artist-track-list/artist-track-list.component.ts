import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from '../search-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-artist-track-list',
  templateUrl: './artist-track-list.component.html',
  styleUrls: ['./artist-track-list.component.scss']
})
export class ArtistTrackListComponent implements OnInit {

  private tracks: any;
  results: RootObject[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
          // console.log(params);
          this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song`).toPromise().then(res => {
            // this.albums = res.results.slice(1);
            this.tracks = res;
            console.log(res);
            console.log(this.tracks);
          });
        });
    }


  ngOnInit() {
  }

}
