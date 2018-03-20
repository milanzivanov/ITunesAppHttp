import { Component, OnInit } from '@angular/core';
import { SearchServiceService, RootObject } from '../search-service.service';
import {ActivatedRoute, Routes, Router} from '@angular/router';

@Component({
  selector: 'my-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  results: RootObject[] = [];
  private loading = false;
  searchValue: string;

  constructor(private itunes: SearchServiceService,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.params.subscribe( params => {

                  // this.doSearch();
                  // console.log(params);
                  if (params['term']) {
                    this.searchValue = params['term'];
                    this.doSearch();
                  }

                });
  }

  // p111
  onSearch() {
    const term = this.searchValue;
    this.router.navigate(['search', { term: term }]);
  }

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
