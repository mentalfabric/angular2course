import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RoomsModule } from "./rooms/rooms.module";
// import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule, routedComponents as mainAppRoutedComponents } from "./app.routing.module";

import { AppComponent } from "./app.component";
// import { LoginComponent } from "./login/login.component";
import { NavComponent } from "./nav/nav.component";
// import { ExerciseComponent } from "./exercise/exercise.component";
// import {RoomsComponent} from "./rooms/rooms.component";

// const routes:Routes = [
//     {
//         path: "exercises",
//         component: ExerciseComponent
//     },
//     {
//         path: "",
//         component: LoginComponent
//     },
//     {
//         path: "rooms/:id",
//         component: RoomsComponent
//     },
//     {
//         path: "**",
//         pathMatch: "full",
//         redirectTo: ""

//     }
// ]

@NgModule({
    imports : [ 
        BrowserModule,
        RoomsModule,
        AppRoutingModule
        // RouterModule.forRoot(routes)
         ],
    declarations : [ 
        AppComponent, 
        NavComponent,
        mainAppRoutedComponents
        // LoginComponent, 
        // ExerciseComponent,
        // RoomsComponent
         ],
    bootstrap : [ 
        AppComponent
         ]
})

export class AppModule { }

