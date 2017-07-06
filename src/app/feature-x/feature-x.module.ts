import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureXRoutingModule } from './feature-x-routing.module';
import { PageXComponent } from './page-x/page-x.component';
import { PageHComponent } from './page-h/page-h.component';
import { CompXComponent } from './comp-x/comp-x.component';
import { FeatureYModule } from '../feature-y/feature-y.module';
import { FeatureZModule } from '../feature-z/feature-z.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureYModule,
    FeatureZModule,
    FeatureXRoutingModule,
  ],
  declarations: [PageXComponent, PageHComponent, CompXComponent],
  exports: [PageXComponent, PageHComponent, CompXComponent]
})
export class FeatureXModule { }
