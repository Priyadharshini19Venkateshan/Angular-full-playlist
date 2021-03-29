import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {

  constructor( private actRoute : ActivatedRoute, private route : Router) { }
snapid;
previd;
nextid;

 observedid;
 selectedId;

  ngOnInit() {
    this.snapid = parseInt(this.actRoute.snapshot.paramMap.get('id')); // Snapshot way
               // parseInt(this.actRoute.snapshot.params.id);
     
    this.actRoute.paramMap.subscribe( 
      (params:ParamMap)=>{                                  //Observable way
        this.observedid = parseInt(params.get('id')) 
      }
    )           
  }
  goPrevious(){
this.previd = this.observedid -1;
// this.snapid - 1;    //will miss out current id
this.route.navigate(['/department',this.previd]) ;
  }

  goNext(){
    this.nextid = this.observedid + 1;
    //this.snapid + 1; //will miss out current id
    this.route.navigate(['/department',this.nextid]) ;
  }

  goBack(){
this.selectedId = this.observedid ? this.observedid : null;
//this.route.navigate(['/department', {id:this.selectedId} ]);  //ABSOULTE NAVIGATION
this.route.navigate(['../',{id:this.selectedId}],{relativeTo : this.actRoute}) ;  // RELATIVE NAVIGATION
}
}
