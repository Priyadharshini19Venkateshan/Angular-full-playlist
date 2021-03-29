import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './1.One way data binding/interpolation/interpolation.component';
import { PropBindComponent } from './2.Property binding/prop-bind/prop-bind.component';
import { ClassBindComponent } from './3.Class binding/class-bind/class-bind.component';
import { StyleBindComponent } from './4.Style binding/style-bind/style-bind.component';
import { EventBindComponent } from './5.Event binding/event-bind/event-bind.component';
import { TwoWayDataBindComponent } from './6.Two way data binding/two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';
import { TempRefVarComponent } from './7.Template reference variable/temp-ref-var/temp-ref-var.component';
import { DirecPracComponent } from './8.Directives/direc-prac/direc-prac.component';
import { ChildCompComponent } from './9.Component Interaction/child-comp/child-comp.component';
import { PipePracComponent } from './10.Pipes/pipe-prac/pipe-prac.component';
import { CustomPipe } from './10.Pipes/custom.pipe';
import { EmpListComponent } from './11.Services/emp-list/emp-list.component';
import { EmpDetailComponent } from './11.Services/emp-detail/emp-detail.component';



import {EmployeeService} from './11.Services/employee.service';
import { NotFoundComponent } from './12.Routing/not-found/not-found.component';
import { DeptComponent } from './13.Route parameters/dept/dept.component';
import { DeptListComponent } from './13.Route parameters/dept-list/dept-list.component';
import { PostInfoComponent } from './14.Http Requests/post-info/post-info.component';
import { RouteGuardComponent } from './15.Route guard/route-guard/route-guard.component';
import { SuccessComponent } from './16.Lazy Loading/success/success.component';
import { AdminComponent } from './15.Route guard/admin/admin.component';
import { CreateComponent } from './15.Route guard/create/create.component';
import { EditComponent } from './15.Route guard/edit/edit.component';
import { DeleteComponent } from './15.Route guard/delete/delete.component';
import { DeactivateComponent } from './15.Route guard/deactivate/deactivate.component';
import { ResolveExampleComponent } from './15.Route guard/resolve-example/resolve-example.component';
import { TempDrivenFormsComponent } from './17.Forms/temp-driven-forms/temp-driven-forms.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropBindComponent,
    ClassBindComponent,
    StyleBindComponent,
    EventBindComponent,
    TwoWayDataBindComponent,
    TempRefVarComponent,
    DirecPracComponent,
    ChildCompComponent,
    PipePracComponent,
    CustomPipe,
    EmpListComponent,
    EmpDetailComponent,
    NotFoundComponent,
    DeptComponent,
    DeptListComponent,
    PostInfoComponent,
    RouteGuardComponent,
    SuccessComponent,
    AdminComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent,
    DeactivateComponent,
    ResolveExampleComponent,
    TempDrivenFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

    MatFormFieldModule,
    MatInputModule
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
