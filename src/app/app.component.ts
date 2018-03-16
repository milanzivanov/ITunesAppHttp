import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http trening with promises(branch 1) and observarbles(branch 2) now ther is lot more branches of agular staff';


  people: Array<any> = [
    {
      'name': 'Douglas  Pace',
      'age': 35,
      'country': 'SER'
    },
    {
      'name': 'Mcleod  Mueller',
      'age': 32,
      'country': 'GER'
    },
    {
      'name': 'Day  Meyers',
      'age': 21,
      'country': 'UK'
    },
    {
      'name': 'Aguirre  Ellis',
      'age': 34,
      'country': 'SER'
    },
    {
      'name': 'Cook  Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];


}

