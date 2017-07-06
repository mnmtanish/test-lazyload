import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHComponent } from './page-h/page-h.component';
import { PageXComponent } from './page-x/page-x.component';

const routes: Routes = [
  { path: '', component: PageHComponent },
  { path: 'x', component: PageXComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureXRoutingModule { }
