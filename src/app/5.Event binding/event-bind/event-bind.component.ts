import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-bind',
  templateUrl: './event-bind.component.html',
  styleUrls: ['./event-bind.component.css']
})
export class EventBindComponent implements OnInit {

  constructor() { }
  myText:string = " This is old text";
  myInputText:string = " ";
  myInputText1:string = " ";
  count:number = 0;
  mystyle = "mysquare";
  mycolor:string;
  ngOnInit(): void {
  }

  changeText(){
    this.myText = "This is new text";
  }

  changeEvent(event:any){
    console.log(event);
    console.log(event.srcElement.innerText);
    event.srcElement.innerText="This is event triggered";
  //  console.log(event.srcElement.innerHTML);
  //  event.srcElement.innerHTML="hi";
  }

  onkeyPressed(event:any){
    this.myInputText= event.target.value + '@@';
  }

  onkeyPresseddown(event:any){
    this.myInputText1= event.target.value;
  }

  incrementByOne(){
    this.count++;
  }

  changeColor(color){
this.mycolor=color;
  }

}
