import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompYComponent } from './comp-y/comp-y.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [CompYComponent],
  exports: [CompYComponent]
})
export class FeatureYModule { }
