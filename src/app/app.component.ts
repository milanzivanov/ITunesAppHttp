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
  private loading = false;


  constructor(private itunes: SearchServiceService) {}

  async doSearch(term: string) {
    this.loading = true;
    const temp = await this.itunes.search(term);
    this.loading = false;

    this.results = temp;

    console.log('app component');
    console.log(this.results);
  }

  ngOnInit() {
  }

}
