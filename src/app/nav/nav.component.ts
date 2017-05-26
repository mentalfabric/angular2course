import {Component} from "@angular/core";

interface Navigation {
    text: string,
    url: string
}

@Component({
    selector : "gw-nav",
    templateUrl : "./nav.component.html",
    styleUrls: ['./nav.component.css']
})

export class NavComponent {
    navItems : Navigation[] = [{
            text : "blah",
            url: "blah@blah.com"
    },
    {
        text : "two",
        url : "two@two.com"
    },
    {
        text: "three",
        url: "three@three.com"
    }]
}