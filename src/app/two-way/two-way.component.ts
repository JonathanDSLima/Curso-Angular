import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  fName: string = "";
  lName: string = "";

  constructor() { }

  ngOnInit() {
  }

}
