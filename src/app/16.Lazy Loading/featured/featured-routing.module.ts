import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './featured.component';
import {SuccessComponent} from '../success/success.component';

const routes: Routes = [
  { path: '', component: FeaturedComponent },
  { path: 'success', component: SuccessComponent }  // works in URL => feature/success


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
