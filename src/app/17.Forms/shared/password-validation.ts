import { AbstractControl } from "@angular/forms";

export function PasswordValidation(control:AbstractControl):
{[key:string]:boolean} | null 
{
const pass = control.get('password');
const Confirmpass = control.get('confirmPassword');

if(pass.pristine || Confirmpass.pristine)
return null;

return pass && Confirmpass && pass.value != Confirmpass.value ?
{'misMatch': true} : null;

}