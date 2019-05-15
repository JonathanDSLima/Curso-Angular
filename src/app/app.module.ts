import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './section-3/home/home.component';
import { EventComponent } from './section-3/event/event.component';
import { AngularmaterialModule } from './angularmaterial/Angular-Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoWayComponent } from './section-3/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { NgstyleComponent } from './section-4/ngstyle/ngstyle.component';
import { Home1Component } from './section-4/home1/home1.component';
import { NgclassComponent } from './section-4/ngclass/ngclass.component';
import { NgifComponent } from './section-4/ngif/ngif.component';
import { NgforComponent } from './section-4/ngfor/ngfor.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    TwoWayComponent,
    NgstyleComponent,
    Home1Component,
    NgclassComponent,
    NgifComponent,
    NgforComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    BrowserAnimationsModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
