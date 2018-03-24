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

  private albums: RootObject[];

  constructor(private http: HttpClient,
    private route: ActivatedRoute) {
        this.route.parent.params.subscribe(params => console.log(params));
    }


ngOnInit() {
}

}
