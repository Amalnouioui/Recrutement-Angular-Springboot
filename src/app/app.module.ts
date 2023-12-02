import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvMaster/cv/cv.component';
import { DetailComponent } from './cvMaster/detail/detail.component';
import { ListeCvComponent } from './cvMaster/liste-cv/liste-cv.component';
import { ItemCvComponent } from './cvMaster/item-cv/item-cv.component';
import { NgstyleComponent } from './directives/ngstyle/ngstyle.component';
import { FormsModule } from '@angular/forms';
import { EmbaucherComponent } from './cvMaster/embaucher/embaucher.component';
import { ROUTING } from './app-routing';

@NgModule({
  declarations:[
    AppComponent,
    CvComponent,
    DetailComponent,
    ListeCvComponent,
    ItemCvComponent,
    NgstyleComponent,
    EmbaucherComponent,
    
   ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
