import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id":1, "name":"AAA","age":22},  
      {"id":2, "name":"BBB","age":32},
      {"id":3, "name":"CCC","age":30},
      {"id":4, "name":"DDD","age":25},
    ];
  }
}
