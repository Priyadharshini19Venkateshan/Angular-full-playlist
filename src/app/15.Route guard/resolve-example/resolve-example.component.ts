import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolve-example',
  templateUrl: './resolve-example.component.html',
  styleUrls: ['./resolve-example.component.css']
})
export class ResolveExampleComponent implements OnInit {

  constructor(private actRoute : ActivatedRoute) { }

  ngOnInit(){
  console.log(this.actRoute.snapshot.data);
  }

}
