import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {

  constructor() { }

  ifactivate: boolean = true;  

  myStyle = {
    'color': 'indigo',
    'font-weight' : this.ifactivate ? 'bold' : 'italics'
  }

  ngOnInit(): void {
  }

}
