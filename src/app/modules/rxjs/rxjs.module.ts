import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTabComponent } from './rxjs-tab/rxjs-tab.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './basic/basic.component';
import { Demo1Component } from './demo1/demo1.component';
import { OperatorsComponent } from './operators/operators.component';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  declarations: [RxjsTabComponent, BasicComponent, Demo1Component, OperatorsComponent, SubjectsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RxjsTabComponent,
        children: [
          { path: 'basic', component: BasicComponent },
          { path: 'demo1', component: Demo1Component },
          { path: 'operators', component: OperatorsComponent },
          { path: 'subjects', component: SubjectsComponent },
          { path: '', redirectTo: 'subjects', pathMatch: 'full' },
        ],
      },
    ]),
  ],
})
export class RxjsModule { }
