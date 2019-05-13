import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  buttonName = "My Button";
  i = 0;


  constructor() { }

  btnEnable = true;

  ngOnInit() {
  }

  save() {
    console.log("Hey brow")
  }

  inc() {
    this.i++;
    this.buttonName = "It is clicked " + this.i + " times";
  }

  disable() {
    this.btnEnable = false;

    setTimeout(() => {
      this.btnEnable = true;
      
    }, 3000)
  }

  cbChange(event){
    console.log(event);
  }

}
