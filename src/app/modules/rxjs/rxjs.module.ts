import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsTabComponent } from './rxjs-tab/rxjs-tab.component';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RxjsTabComponent, MapsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: RxjsTabComponent,
        children: [
          { path: 'maps', component: MapsComponent },
          { path: '', redirectTo: 'maps', pathMatch: 'full' },
        ],
      },
    ]),
  ],
})
export class RxjsModule {}
