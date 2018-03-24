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

  private artist: RootObject[];

  constructor(private http: HttpClient,
              private route: ActivatedRoute) {
                this.route.parent.params.subscribe(
                  // params => console.log(params)
                  // params => this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song`)
                  params => this.http.get(`https://itunes.apple.com/lookup?${params['artistId']}`)
                  .map(res => {
                    const ids = this.artist = res as RootObject[];
                    // return ids;
                    // console.log(this.artist);
                  }
                  // const ids = await this.http.get(apiURL).map(res => this.results = res as RootObject[]).toPromise();

                  // return ids;
                  ).toPromise()
                );
              }

  ngOnInit() {
    // this._employeeService.getEmployees()
    // .subscribe(data => this.employees = data,
    //           error => this.errorMsg = error);
  }

}
