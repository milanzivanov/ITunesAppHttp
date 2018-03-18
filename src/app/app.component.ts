import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { SearchServiceService, RootObject } from './search-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // results: RootObject[] = [];
  // private loading = false;
  // searchValue: string;

  // constructor(private itunes: SearchServiceService) {}

  // async doSearch() {
  //   this.loading = true;
  //   this.results = await this.itunes.search(this.searchValue);
  //   this.loading = false;
  //   this.searchValue = '';

  //   console.log('app component');
  //   // index[0].
  //   console.log(this.results[0].results[0].artistName);
  // }

  ngOnInit() {
  }

}
