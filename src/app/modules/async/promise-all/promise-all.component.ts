import { Component } from '@angular/core';

@Component({
  selector: 'app-promise-all',
  templateUrl: './promise-all.component.html',
  styleUrls: ['./promise-all.component.css'],
})
export class PromiseAllComponent {
  resolveTimeout(value: any, delay: number) {
    return new Promise((resolve) => setTimeout(() => resolve(value), delay));
  }

  rejectTimeout(reason: string, delay: number) {
    return new Promise((r, reject) => setTimeout(() => reject(reason), delay));
  }

  triggerPromiseAll() {
    Promise.all([
      this.resolveTimeout('Promise 1 resolved', 3000),
      this.resolveTimeout('Promise 2 resolved', 1000),
    ]).then((r) => {
      console.log(`Promise.all result`, r);
    });

    Promise.all([
      this.rejectTimeout('Rejection', 1000),
      this.resolveTimeout('Promise 1 resolved', 300),
    ])
      .then((r) => {
        console.log(`Promise All success result`, r);
      })
      .catch((err) => {
        console.log(`Promise All reject reason`, err);
      });
  }
}
