import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent implements OnInit {

  constructor() { }

  myid: string= 'hello';
  inputdisabled: boolean =true;
  myvalue:string='hi';

ngOnInit(): void {
  }

}
