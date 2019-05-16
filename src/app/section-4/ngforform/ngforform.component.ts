import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngforform-curso',
  templateUrl: './ngforform.component.html',
  styleUrls: ['./ngforform.component.css']
})
export class NgforformComponent implements OnInit {

  name: string = "";
  address: string = "";
  city: string = "";
  phone: number = null;
  age: number = null;

  cities = [
    {name: "Disney", state: "FON"},
    {name: "Alcatraz", state: "POH"},
    {name: "Santo André", state: "SP"},
    {name: "Salvador", state: "DEUS"},
    {name: "Sanatório", state: "SOS"},
    {name: "Island", state: "IS"},
  ];

  clients=[];
  


  constructor() { }

  ngOnInit() {

  }

  save(){
    this.clients.push({
      name: this.name,
      address: this.address,
      city: this.city,
      phone: this.phone,
      age: this.age
    })
    this.cancel();
  }

  cancel(){
    this.name = "";
    this.address = "";
    this.city = "";
    this.phone = null;
    this.age = null;
  }
  
  delete(i:number){
    this.clients.splice(i, 1);
  }

}
