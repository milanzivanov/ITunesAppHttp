import { Component, OnInit } from '@angular/core';


class Article {
  constructor(public title: string,
              public date: Date,
              public content: string,
              public kind: string) {
  }
}

@Component({
  selector: 'my-recent-articles',
  templateUrl: './recent-articles.component.html',
  styleUrls: ['./recent-articles.component.scss']
})
export class RecentArticlesComponent implements OnInit {

  articles: Article[] = [
    new Article('Title 1', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula', 'text'),
    new Article('Title 2', new Date(), 'https://unsplash.it/400?image=10', 'image'),
    new Article('Title 3', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula', 'text'),
    new Article('Title 4', new Date(), 'https://unsplash.it/400?image=20', 'image'),
    new Article('Title 5', new Date(), 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula', 'text'),
    new Article('Title 6', new Date(), 'https://unsplash.it/400?image=30', 'image')
  ];

  constructor() { }

  ngOnInit() {
  }

}
