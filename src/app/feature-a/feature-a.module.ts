import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { PageAComponent } from './page-a/page-a.component';
import { FeatureYModule } from '../feature-y/feature-y.module';
import { FeatureZModule } from '../feature-z/feature-z.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureYModule,
    FeatureZModule,
    FeatureARoutingModule,
  ],
  declarations: [PageAComponent],
  exports: [PageAComponent]
})
export class FeatureAModule { }
