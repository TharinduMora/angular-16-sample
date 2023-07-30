import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromisesExampleComponent } from './promises-example/promises-example.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PromisesExampleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PromisesExampleComponent,
      },
    ]),
  ],
})
export class PromisesExampleModule {}
