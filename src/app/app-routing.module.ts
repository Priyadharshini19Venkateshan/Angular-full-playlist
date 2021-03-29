import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpDetailComponent } from './11.Services/emp-detail/emp-detail.component';
import { EmpListComponent } from './11.Services/emp-list/emp-list.component';
import { NotFoundComponent } from './12.Routing/not-found/not-found.component';
import { DeptListComponent } from './13.Route parameters/dept-list/dept-list.component';
import { DeptComponent } from './13.Route parameters/dept/dept.component';
import { TempRefVarComponent } from './7.Template reference variable/temp-ref-var/temp-ref-var.component';
import {RouteGuardComponent} from './15.Route guard/route-guard/route-guard.component';
import { AuthGuard } from './15.Route guard/auth.guard';
import { SuperadminGuard } from './15.Route guard/superadmin.guard';
import { AdminComponent } from './15.Route guard/admin/admin.component';
import { SubadminGuard } from './15.Route guard/subadmin.guard';
import { CreateComponent } from './15.Route guard/create/create.component';
import { DeleteComponent } from './15.Route guard/delete/delete.component';
import { EditComponent } from './15.Route guard/edit/edit.component';
import { LazyloadGuard } from './15.Route guard/lazyload.guard';
import { DeactivateComponent } from './15.Route guard/deactivate/deactivate.component';
import { UnsavedGuard } from './15.Route guard/unsaved.guard';
import { ResolverGuard } from './15.Route guard/resolver.guard';
import { ResolveExampleComponent } from './15.Route guard/resolve-example/resolve-example.component';



const routes: Routes = [
  {path:"templateReferenceVariable", component:TempRefVarComponent},

   //nested routing
  {path:"services/list", component:EmpListComponent,
  children: [{ path:"details", component:EmpDetailComponent}] } ,  
 
  {path:"department", component:DeptListComponent},

//routing with param extraction
  {path:"department/:id", component:DeptComponent},

//canActivate route guard
  {path:"routeguard", component:RouteGuardComponent , canActivate:[AuthGuard]},

  //canActivateChild route guard
  { path:"admin", canActivate: [SuperadminGuard], 
     children: [
       { path:"",component:AdminComponent},
       { path:"", canActivateChild:[SubadminGuard],
          children: [
            {path:"create", component:CreateComponent},
            {path:"delete", component:DeleteComponent},
            {path:"edit", component:EditComponent}
        ] } ] 
        },

//CanLoad and LazyLoading Routing      
  { path: 'featured', canLoad:[LazyloadGuard],
   loadChildren: () => import('./16.Lazy Loading/featured/featured.module').then(m => m.FeaturedModule) },

//CanDeactivate Routing
{path:"deact", canDeactivate:[UnsavedGuard], component:DeactivateComponent},

//Resolve routing
{path:'resolveExp', 
resolve: {  data: ResolverGuard }, //its an key-value object. so use {}
 component:ResolveExampleComponent},


  // {path:"", redirectTo:" ", pathMatch: "full"}, // for landing page 
//  {path:"**", component:NotFoundComponent}, // for 404 error page // {path:"**", redirectTo:" details"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
