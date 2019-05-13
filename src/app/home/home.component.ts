import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colors = [ 'btn btn-primary', 'btn btn-secondary', 'btn btn-success',
  'btn btn-danger', 'btn btn-warning', 'btn btn-info','btn btn-dark',
  'btn btn-light']
  idx = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() =>{
      this.idx = (this.idx+1) % this.colors.length;
    }, 1000)
    
  }

}
