import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngstyle-curso',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  myFont = "";

  myColor = "";

  myFontFamily = "";

  constructor() { }

  ngOnInit() {
  }

}
