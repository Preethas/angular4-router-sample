import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  data = 'var app = angular.module("myApp", ["ngRoute"]);' +
  'app.config(function($routeProvider) {<br>' +
  '$routeProvider<br>' +
    '.when("/banana", {' +
      'template : "Banana - Bananas contain around 75% water."'+
    '})<br>' +
    '.when("/tomato", {'+
    '  template : "Tomato - Tomatoes contain around 95% water."'+
    '})<br>' +
    '.otherwise({' +
    '  template : "None - Nothing has been selected"' +
    '});' +
   '});"' ;

  constructor(private router: Router) { }

  btnClick= function () {
    this.router.navigateByUrl('/component2');
  };


  ngOnInit() {
  }

}
