import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { PageAComponent } from './page-a/page-a.component';

@NgModule({
  imports: [
    CommonModule,
    FeatureARoutingModule
  ],
  declarations: [PageAComponent]
})
export class FeatureAModule { }
