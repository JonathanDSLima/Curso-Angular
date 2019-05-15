import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './section-3/home/home.component';
import { Home1Component } from './section-4/home1/home1.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '', component:Home1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
