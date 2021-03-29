import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  constructor() { }
 @Input()  parentData; // receiving data from parent
 @Output()  childEvent= new EventEmitter(); // instance for sending event to parent
  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit("I am from child component");
  }


}
