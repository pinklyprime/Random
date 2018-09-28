import {Component} from '@angular/core';


@Component({selector:'pm-games',templateUrl:'./games.component.html'})
export class GamesComponent{
   
    ngAfterViewInit() {
        var testScript = document.createElement("script");
        testScript.setAttribute("id", "testScript");
        testScript.setAttribute("src", "//jsfiddle.net/PinklyPrime/1jswo2ge/234/embed/result,js,html,css/dark/");
        document.getElementById("othello").appendChild(testScript);
    }  
}