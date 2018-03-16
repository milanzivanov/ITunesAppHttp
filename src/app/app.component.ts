import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'http trening with promises(branch 1) and observarbles(branch 2) now ther is lot more branches of agular staff';

  people: any[] = [
    {
      'name': 'Douglas  Pace',
      'country': 'UK'
    },
    {
      'name': 'Mcleod  Mueller',
      'country': 'USA'
    },
    {
      'name': 'Day  Meyers',
      'country': 'HK'
    },
    {
      'name': 'Aguirre  Ellis',
      'country': 'UK'
    },
    {
      'name': 'Cook  Tyson',
      'country': 'USA'
    }
  ];

  // Our getColor function returns different colors depending on the country passed in
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

 }
