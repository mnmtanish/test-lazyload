import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureYRoutingModule } from './feature-y-routing.module';
import { CompYComponent } from './comp-y/comp-y.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureYRoutingModule
  ],
  declarations: [CompYComponent],
  exports: [CompYComponent]
})
export class FeatureYModule { }
