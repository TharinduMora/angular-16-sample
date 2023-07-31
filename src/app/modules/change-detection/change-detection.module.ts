import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdParentComponent } from './cd-parent/cd-parent.component';
import { CdChildComponent } from './cd-child/cd-child.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CdParentComponent,
    CdChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CdParentComponent }
    ])
  ]
})
export class ChangeDetectionModule { }
