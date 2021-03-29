import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  selectedId;
  constructor( private router:Router, private actRoute: ActivatedRoute) { }

  departments = [
    {"id":1 , "name" : "Angular"},
    {"id":2, "name" : "Node"},
    {"id":3 , "name" : "Express"},
    {"id":4 , "name" : "Vue"},
    {"id":5 , "name" : "Typescript"}
  ];
  ngOnInit() {
this.actRoute.paramMap.subscribe(
  (params:ParamMap)=>{
this.selectedId = parseInt(params.get('id'))
  }
);
  }

  onselect(deptInfo){
//this.router.navigate( ['/department',deptInfo.id ] );   // ABSOULTE NAVIGATION
 this.router.navigate([deptInfo.id],{relativeTo: this.actRoute})  // RELATIVE NAVIGATION

  }

  isSelected(deptInfo){
    return deptInfo.id === this.selectedId;
  }

}
