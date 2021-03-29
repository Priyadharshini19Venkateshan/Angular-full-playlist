import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-driven-forms',
  templateUrl: './temp-driven-forms.component.html',
  styleUrls: ['./temp-driven-forms.component.css']
})
export class TempDrivenFormsComponent implements OnInit {

  username:string;
  gender:string;
  graduate:string;
  description:string;
  terms:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(formValues : NgForm)
  {
 console.log(formValues.value);
  }

  resetForm(formValues: NgForm){
// formValues.reset();      
 formValues.resetForm();        // both plays same role.
  }

  Setvalues(formValues: NgForm)    // works effectively for edit info
  {                                        
let details={
  username:"aaaaa",            
  gender:"male",
  graduate:"no",
  description:"",         
  terms:false
 }
 formValues.setValue(details);   
  }

}
