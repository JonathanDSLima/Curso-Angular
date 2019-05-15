import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {

  fName: string = "";
  lName: string = "";

  client = {
    firstName: "Baphomet",
    lastName: "Templário",
    address: "Hell",
    age: 0
  }

  constructor() { }

  ngOnInit() {
  }

}
