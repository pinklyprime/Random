// import { Component } from '@angular/core';//import is like using, this gets us the ability to use the @component decorator from angular/core. 

// @Component({ //this decorates the appcomponent class, tells it where to apply, in this case the app.component.html
//   selector: 'pm-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent { // this is our class, i think export makes it extendable to other classes, kinda like public maybe.
//   title = 'Angular: Getting Started';
// }

import {Component} from '@angular/core';
@Component({selector:'pm-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.css']})
export class AppComponent{
  title : string = "get shit on yea noobcake";
}