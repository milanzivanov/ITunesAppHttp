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

  private tracks: RootObject[];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
                  this.route.parent.params.subscribe(params => console.log(params));
              }


  ngOnInit() {
  }

}
