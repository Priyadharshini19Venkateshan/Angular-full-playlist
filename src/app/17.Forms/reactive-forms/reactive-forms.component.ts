import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { PasswordValidation } from '../shared/password-validation';
import { forbiddenNameValidator } from '../shared/username-validator';
import {  LoginService  } from '../login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

loginForm: FormGroup;


  constructor( private formbuilder: FormBuilder, private login: LoginService) { }

  ngOnInit() {

  //  Without using formBuilder
 /*   this.loginForm = new FormGroup({
      'username': new FormControl(), 
      'password': new FormControl()  
    }) */


    //Using Formbuilder
    this.loginForm = this.formbuilder.group({
        'username': new FormControl('',[ Validators.required , Validators.minLength(5), 
          Validators.maxLength(20), forbiddenNameValidator(/admin/)
        ]), 
        'email': new FormControl(''),
        'subscribe': new FormControl(false),
        'password': new FormControl('',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
        'confirmPassword': new FormControl('',[Validators.required]),

       
        /* FORM ARAAY WITH FORM CONTROLS
        'info': new FormArray([
          new FormControl('priya'),
          new FormControl('dharshini')
        ])*/

        // FORM ARRAY WITH FORM GROUP
        'info': new FormArray([
          this.formbuilder.group({
            'name': new FormControl(''),
            'age': new FormControl(''),
            'maturity': new FormControl(''),
          })
        ])
    },{validator:PasswordValidation});

   
    // way1 to set value for forms
  //'username': new FormControl('priya'), 
  //'password': new FormControl('hello') 

   // way2 to set value for forms
   //its an recommended way 
   //Using set Value method all fields/key should be mentioned in array
  /*  const editinfo = {
          'username': '',
          'password': ''
             }
        this.loginForm.setValue(editinfo); */
  
  
       //Using patch Value method all fields/key are'nt mandatory to mentioned in array
       //It takes the selected key/fields to populate
       // this.loginForm.patchValue(editinfo);


//tracking of entire form value changes
//Can also be implemented in Ngonchanges and Ngoninit Hook
 //this.loginForm.valueChanges.subscribe( data => console.log(data) ); 

//tracking of specific formcontrol value changes
//this.loginForm.get('username').valueChanges.subscribe( (data)=> console.log(data) ); 


//tracking of entire form status changes
//this.loginForm.statusChanges.subscribe( data => console.log(data) ); 

//tracking of specific formcontrol status changes
 // this.loginForm.get('username').statusChanges.subscribe( (data)=> console.log(data) );



 /*simple way1  for FORMARRAY
 let info = new FormArray([
   new FormControl('priya'),
   new FormControl('dharshini')
 ])
console.log(info);
console.log(info.value); */




//conditional validation for email with checkbox
this.loginForm.get('subscribe').valueChanges.subscribe( 
  (checkedValue)=> {
    const email = this.loginForm.get('email');
    if(checkedValue)
    email.setValidators(Validators.required);
    else
    email.clearValidators();

    email.updateValueAndValidity();
  } ); 


  } 




  submitForm(){

    this.login.postData(this.loginForm.value). subscribe(
      response => console.log('Logged In Successfully!!', response)
    );

  //receives all the form values on one go
  // console.log(this.loginForm.value);
    
 //receives only specific/certain form value
  //  console.log(this.loginForm.get('username').value);


  //receives only the changed value in the form
   /*this.loginForm.valueChanges.subscribe(
     data => {console.log(data);}
     );*/



/*checking state information of forms
  console.log("ng-Valid = " + this.loginForm.valid);
  console.log("ng-Invalid = " + this.loginForm.invalid);
  console.log("ng-Touched = " + this.loginForm.touched);
  console.log("ng-Untouched = " + this.loginForm.untouched);
  console.log("ng-Pending = " + this.loginForm.pending);
  console.log("ng-Pristine = " + this.loginForm.pristine);
  console.log("ng-Dirty = " + this.loginForm.dirty);
   */
   }

 






get info(): FormArray{
  return this.loginForm.get('info') as FormArray;
}


addinfo(){
let infoArray = this.loginForm.get('info') as FormArray;
let newInfoArray = this.formbuilder.group({
  'name':'',
  'age': '',
  'maturity': ''
})
infoArray.push(newInfoArray);
}

removeinfo(i){
let tempArray =  this.loginForm.get('info') as FormArray;
tempArray.removeAt(i);
}

assignMaturity(i){
  let infoArray = this.loginForm.get('info') as FormArray;
 // let values = infoArray.value;

  if(infoArray.value[i].age <10)
    infoArray.value[i].maturity = "child";

  else if(infoArray.value[i].age <20)
    infoArray.value[i].maturity = "teen age";

    else if(infoArray.value[i].age <30  || infoArray.value[i].age < 40 )
    infoArray.value[i].maturity = "adult";

    else 
    infoArray.value[i].maturity = "old age";

    this.info.setValue(infoArray.value);
  
}




}
