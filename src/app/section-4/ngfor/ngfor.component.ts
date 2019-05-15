import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngfor-curso',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {


  names = [
    "Alpaka",
    "Kowalski",
    "Jessélia",
    "Porto-lee",
    "Nhãããããã",
    "Motoboy"
  ];

  cities = [
    {name: "São Paulo", state: "SP"},
    {name: "Rio de Janeiro", state: "RJ"},
    {name: "Campina Grande", state: "PB"},
    {name: "Salvador", state: "BA"},
    {name: "Sanatório", state: "SOS"},
    {name: "Cone Island", state: "RS"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
