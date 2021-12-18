import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';

import { AppComponent } from './app.component';


@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule, 
    MaterialModule,
    MatCarouselModule
  ],
  declarations: [ 
    AppComponent, 
  ],
  bootstrap: [ 
    AppComponent 
  ]
})
export class AppModule { }
