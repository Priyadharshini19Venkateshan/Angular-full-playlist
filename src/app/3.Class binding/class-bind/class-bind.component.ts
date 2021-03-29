import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css']
})
export class ClassBindComponent implements OnInit {

  constructor() { }
  myvariable= "myclass";
  isStyleActive:boolean = true;
  iscolorActive:boolean = true;
  isfontActive:boolean = false;
  isfamilyActive:boolean = false;


  StyleCheck={
    colorclass : this.iscolorActive,
    fontclass : this.isfontActive,
    familyclass : this.isfamilyActive
  }


  
  ngOnInit(): void {
  }

}
