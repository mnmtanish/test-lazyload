import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { PageAComponent } from './page-a/page-a.component';
import { FeatureXModule } from '../feature-x/feature-x.module';

@NgModule({
  imports: [
    CommonModule,
    FeatureXModule,
    FeatureARoutingModule,
  ],
  declarations: [PageAComponent],
  exports: [PageAComponent]
})
export class FeatureAModule { }
