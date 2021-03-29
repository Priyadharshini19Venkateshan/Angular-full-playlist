import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  mystring:string= 'Hi!! This is Interpolation concept';
  mynumber:number= 5;
  myimage='https://images-na.ssl-images-amazon.com/images/I/61OXKrkiy-L._SL1399_.jpg';
  myjson = {
   name: 'Priya',
   workspace: 'IT'
    }
 
 
  ngOnInit(): void {
  }

}
