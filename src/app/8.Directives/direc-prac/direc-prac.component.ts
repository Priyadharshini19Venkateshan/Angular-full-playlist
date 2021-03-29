import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direc-prac',
  templateUrl: './direc-prac.component.html',
  styleUrls: ['./direc-prac.component.css']
})
export class DirecPracComponent implements OnInit {

  constructor() { }
  activate:boolean ;
  enabled:boolean = true;
  colorPicked:string='green';
  numerals=[0,1,2,3,4,5,6,7,8,9];
  ngOnInit(): void {
  }

}
