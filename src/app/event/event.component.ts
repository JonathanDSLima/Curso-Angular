import { Component, OnInit } from '@angular/core';
import { Marca } from '../models/marca';
@Component({
  selector: 'event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  colors: string[] = ['#004d40','warn', 'primary', 'basic', 'accent', 'secondary']
  idx = 0;
  i = 0;
  buttonName = "My Button";
  selectDisabled = false;
  selectedOption = 0;
  inputName = "";
  

  marcas: Marca[] = [
    {value: '0', viewValue: 'Samsung'},
    {value: '1', viewValue: 'Huawei'},
    {value: '2', viewValue: 'Asus'},
    {value: '3', viewValue: 'Xiaomi'}
  ];


  constructor() { }

  btnEnable = true;

  ngOnInit() {
    setInterval(() =>{
      this.idx = (this.idx+1) % this.colors.length;
    }, 1000)
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
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selecCg(event){
    this.selectedOption = event.value;
    console.log(event);
  }

  inputEvent(event){
    console.log(event.target.value);
  }

}
