import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  data1 = "import {RouterModule} from '@angular/router';" +
   "<br> Include the following in the imports section <br>" +
  "RouterModule.forRoot([" +
  "{path:'component1',component:Component1Component}," +
  "{path:'component2',component:Component2Component}" +
  "])";

  data2 = "In order to navigate on a button click <br>" +
    "Inject the router into the components constructor <br>" +
  "constructor(private router: Router) { } <br>" +
  "In the button click function use the following code <br>" +
  "btnClick= function () {" +
    "this.router.navigateByUrl('/component2');" +
  "};";

  constructor(private router: Router) { }

  btnClick= function () {
    this.router.navigateByUrl('/component1');
  };

  ngOnInit() {
  }

}
