import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from '../search-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss']
})
export class ArtistAlbumListComponent implements OnInit {

  private albums: any;
  // results: RootObject[];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => {
          // console.log(params);
          this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album`).toPromise().then(res => {
            // this.albums = res.results.slice(1);
            this.albums = res;
            console.log(res);
            console.log(this.albums);
          });
        });
    }

  // constructor(
  //   private http: HttpClient,
  //   private route: ActivatedRoute) {
  //       this.route.parent.params.subscribe(params => {
  //         // console.log(params);
  //         this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album`).map(res => {
  //           // this.albums = res.results.slice(1);
  //           this.albums = res as RootObject[];
  //           console.log(res);
  //           console.log(this.albums);
  //         });
  //       });
  //   }


ngOnInit() {
}

}
