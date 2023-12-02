import { Router, RouterModule, Routes } from "@angular/router";
import { CvComponent } from "./cvMaster/cv/cv.component";
import { NgstyleComponent } from "./directives/ngstyle/ngstyle.component";

const APP_ROUTING:Routes=[
    
{ path:'cv',component:CvComponent},
{path:"style" , component:NgstyleComponent}


];
export const ROUTING =RouterModule.forRoot(APP_ROUTING);