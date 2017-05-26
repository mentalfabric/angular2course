import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteSnapshot } from "@angular/router";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  public id:number;

  constructor(private activatedRoute:ActivatedRoute) { }

  

  ngOnInit() {
    this.activatedRoute;
  }

}
