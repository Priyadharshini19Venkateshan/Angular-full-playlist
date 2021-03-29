import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {

Employees=[];

  constructor(private empService : EmployeeService) { } //gets an instance of employeeService 

//Initializes the Service class with ONINIT lifecycle hook
  ngOnInit() {
    this.Employees= this.empService.getEmployees();
  }

}
