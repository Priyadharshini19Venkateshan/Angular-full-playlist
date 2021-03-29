import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-ref-var',
  templateUrl: './temp-ref-var.component.html',
  styleUrls: ['./temp-ref-var.component.css']
})
export class TempRefVarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value)
  {
console.log(value);

  }


}
