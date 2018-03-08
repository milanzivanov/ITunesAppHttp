import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from './search-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private itunes: SearchServiceService) {

  }

  doSearch(term: string) {
    this.itunes.search(term);
  }


  ngOnInit() {
  }

}
