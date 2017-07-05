import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureXRoutingModule } from './feature-x-routing.module';
import { PageXComponent } from './page-x/page-x.component';
import { PageHComponent } from './page-h/page-h.component';
import { CompXComponent } from './comp-x/comp-x.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureXRoutingModule
  ],
  declarations: [PageXComponent, PageHComponent, CompXComponent]
})
export class FeatureXModule { }
