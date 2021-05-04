import { AbstractControl, ValidatorFn } from "@angular/forms";

 export function forbiddenNameValidator(forbiddenName : RegExp): ValidatorFn
{
 return (control:AbstractControl): {[key:string]:any} | null => {

const forbid = forbiddenName.test(control.value);

return forbid ? {'forbiddenName': {value: control.value}} : null;


}

}


