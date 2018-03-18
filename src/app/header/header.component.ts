import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  // experiment
  // goHome() {
  //   this.router.navigate(['']);
  // }
  // goSearch() {
  //   this.router.navigate(['search']);
  // }

  ngOnInit() {
  }

}
