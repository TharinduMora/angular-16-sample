import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-promises',
  templateUrl: './basic-promises.component.html',
  styleUrls: ['./basic-promises.component.css'],
})
export class BasicPromisesComponent implements OnInit {
  // Immediately Resolved Promise
  immediateResolvePromise = Promise.resolve('done');

  basicPromise(err: boolean = false) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (err) {
          reject('An error occured');
        } else {
          resolve({ data: { id: 1, name: 'test' } });
        }
      }, 3000);
    });
  }

  triggerExamples() {
    this.basicPromise()
      .then((r) => {
        console.log('Result- ', r);
      })
      .catch((err) => console.log('error- ', err));

    this.basicPromise(true)
      .then((r) => {
        console.log('Result- ', r);
      })
      .catch((err) => console.log('error- ', err));

    /**
     * even though the Promise has resolved before we added the success handler, the promise framework still calls the success handler.
     */
    this.immediateResolvePromise.then((val) => console.log(val)); // 'done'

    Promise.reject('chainning fail')
      .then(
        (val) => {
          console.log(val);
        },
        (err) => {
          console.log('err', err);
          throw new Error(err);
        }
      )
      .then(
        (val) => console.log(val),
        (err) => console.error(err)
      );

    Promise.resolve('chainning done')
      .then((val) => {
        console.log(val);
        return `[2] ${val}`;
      })
      .then(
        (val) => console.log(val),
        (err) => console.error(err)
      );
  }

  ngOnInit(): void {}
}
