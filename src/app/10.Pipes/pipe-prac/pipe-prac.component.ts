import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-prac',
  templateUrl: './pipe-prac.component.html',
  styleUrls: ['./pipe-prac.component.css']
})
export class PipePracComponent implements OnInit {

  constructor() { }
myname = "priyadharshini"
message = "welcome to angular";
myinfo = {
  "fn": "Priyadharshini",
  "ln": "Venkateshan"
}
myVal=6.34534;
date= new Date();

  ngOnInit(): void {
  }

}
