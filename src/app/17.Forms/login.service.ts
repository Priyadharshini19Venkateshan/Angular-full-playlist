import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:3000/loggedIn';

  constructor(private http: HttpClient) { }


  postData(userData){
     return this.http.post<any>(this.url, userData);
  }

}
