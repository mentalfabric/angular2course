import { NgModule } from "@angular/core";

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { LoginComponent } from "./login/login.component";

import { NavComponent } from "./nav/nav.component";

import { ExerciseComponent } from "./exercise/exercise.component";

@NgModule({
    imports : [ BrowserModule ],
    declarations : [ AppComponent, LoginComponent, NavComponent, ExerciseComponent ],
    bootstrap : [ AppComponent ]
})

export class AppModule { }