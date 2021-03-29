import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DeactivateComponent } from './deactivate/deactivate.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<DeactivateComponent> {
  canDeactivate(component: DeactivateComponent)
     {
       if(component.isDirty){
        return  window.confirm("You have some unsaved changes. Are you sure you want to leave?");
       }
    return true;
  }
  
}
