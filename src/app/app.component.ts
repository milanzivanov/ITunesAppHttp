import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `*ngFor example & *ngFor in ngFor`;

  // simple *ngFor example
  persons: Array<any> = [
    {
      'name': 'Milan Zivanov me'
    },
    {
      'name': 'Ivan Zivanov my big brother'
    },
    {
      'name': 'Mile Z'
    },
    {
      'name': 'Milica Z'
    },
    {
      'name': 'Marija B'
    }
  ];

  // *ngFor in ngFor example grouped
  peopleByCountry: any[] = [
    {
      'country': 'UK',
      'people': [
        {
          'name': 'Douglas  Pace'
        },
        {
          'name': 'Mcleod  Mueller'
        },
      ]
    },
    {
      'country': 'US',
      'people': [
        {
          'name': 'Day  Meyers'
        },
        {
          'name': 'Aguirre  Ellis'
        },
        {
          'name': 'Cook  Tyson'
        }
      ]
    }
  ];
}
