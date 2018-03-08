import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from './search-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  results: RootObject[] = [];

  constructor(private itunes: SearchServiceService) {}

  async doSearch(term: string) {
    const temp = await this.itunes.search(term);
    this.results = temp;

    console.log('app component');
    console.log(this.results);
  }

  ngOnInit() {
  }

}
