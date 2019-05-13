import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const MATERIAL = [
  MatCheckboxModule,
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MATERIAL
  ],
  exports:[
    MATERIAL
  ]
})
export class AngularmaterialModule { }
