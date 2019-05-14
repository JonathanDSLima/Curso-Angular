import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { AngularmaterialModule } from './angularmaterial/Angular-Material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    TwoWayComponent,
    
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
