import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsyncLandingComponent } from './async-landing/async-landing.component';
import { RouterModule } from '@angular/router';
import { PromiseAllComponent } from './promise-all/promise-all.component';
import { BasicPromisesComponent } from './basic-promises/basic-promises.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    PromiseAllComponent,
    CallbackComponent,
    BasicPromisesComponent,
    AsyncLandingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AsyncLandingComponent,
      },
    ]),
  ],
})
export class AsyncModule {}
