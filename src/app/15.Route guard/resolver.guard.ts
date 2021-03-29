import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGuard implements Resolve<any> {

  receivedData={
    id:10,
    name:"aaa"
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
 
    //you will inject the service here
    // Call the api call of get to fetch the unique id data from back end

   return this.receivedData;

  }
  
  
}
