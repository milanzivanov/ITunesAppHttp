import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from '../search-service.service';

@Component({
  selector: 'my-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: RootObject[] = [];
  private loading = false;
  searchValue: string;

  constructor(private itunes: SearchServiceService) {}

  async doSearch() {
    this.loading = true;
    this.results = await this.itunes.search(this.searchValue);
    this.loading = false;
    this.searchValue = '';

    console.log('app component');
    // index[0].
    // console.log(this.results[0].results[0].artistName);
  }

  ngOnInit() {
  }

}
