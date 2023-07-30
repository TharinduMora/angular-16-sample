import { Component } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css'],
})
export class CallbackComponent {
  basicCallbackFn(cb: any) {
    setTimeout(() => {
      cb();
    }, 1000);
  }

  triggerCallback() {
    this.basicCallbackFn(() => {
      console.log('Callback function works');
    });
  }
}
