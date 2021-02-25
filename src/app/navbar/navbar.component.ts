import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  navImg="https://rynop.files.wordpress.com/2016/10/angular.png";

  ngOnInit(): void {
  }

}
