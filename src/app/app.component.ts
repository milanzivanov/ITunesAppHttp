import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SearchItem, SearchService } from './search.service';
import {ReactiveFormsModule, FormControl, FormsModule} from '@angular/forms';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  private loading = false;
  private results: SearchItem[];
  // private results: SearchItem[] = [];
  private searchField: FormControl;

  constructor(private itunes: SearchService) {
  }


  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(_ => this.loading = true)
        .switchMap(term => this.itunes.search(term))
        .do(_ => this.loading = false)
        .subscribe(r => this.results = r);
  }

  doSearch(term: string) {
    this.itunes.search(term);
  }

}
