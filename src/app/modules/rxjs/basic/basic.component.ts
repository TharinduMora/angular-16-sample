import { Component } from '@angular/core';
import { Observable, ReplaySubject, Subscriber, filter, from, map, takeUntil } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  // 'from' converted different types of data into observables
  booksArray = [{ id: 1, name: "test 1" }, { id: 2, name: "test 2" }, { id: 3, name: "test 3" }];
  booksObservable$ = from(this.booksArray);
  subscribeToBooks() {
    this.booksObservable$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (res) => {
        console.log(res);
      }, error: () => {
      }, complete: () => {
        console.log('completed');
      }
    })
  }

  // 'from' converted promise into observables
  samplePromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('resolved') }, 10000)
  });
  samplePromiseObservable$ = from(this.samplePromise);
  subscribeToSamplePromise() {
    this.samplePromiseObservable$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (res) => {
        console.log(`Sample Promise Response - ${res}`);
      }, error: () => {
        console.log('Sample Promise error');
      }, complete: () => {
        console.log('Sample Promise completed');
      }
    })
  }

  // Example of using http calls with observables 
  httpObservable$ = ajax.getJSON('https://reqres.in/api/users?page=2');
  subscribeToHttpObservable() {
    this.httpObservable$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (res) => {
        console.log(res);
      }, error: () => {
        console.log('error');
      }, complete: () => {
        console.log('completed');
      }
    })

  }

  // Create new operator and emit value, error and completed
  customObserverResponse: 'next' | 'error' | 'done' = 'error';
  customObservable = new Observable(observer => {
    switch (this.customObserverResponse) {
      case 'next':
        observer.next('A Value Emitted');
        break;
      case 'error':
        observer.error('customObservable - An error occured');
        break;
      case 'done':
        observer.complete();
        break;
      default:
        observer.complete()
    }
  })
  
  subscribeToCustomObservable() {
    this.customObservable.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (res) => {
        console.log(`customObservable respnse- ${res}`);
      }, error: (err) => {
        console.log(`customObservable Error - ${err}`);
      }, complete: () => {
        console.log('Custom completed');
      }
    })
  }

  randomObs$ = new Observable<any>(observer => {
    observer.next(Math.random());
  })

  // pre defined observer scenario
  // https://docs.google.com/document/d/18ulo2-x_sI3J2BGazNpgo_gtHd4v6pI9RrHhdmvfNPk/edit?pli=1#heading=h.qkm86imc1m0n
  nums$ = from([-2, -1, 0, 1, 2]);
  observer = {
    next: (res: any) => { console.log(res) },
    error: (error: any) => { console.log(`Error - ${error}`) },
    complete: () => { console.log('Completed') },
  }

  ngOnInit() {
    this.subscribeToBooks()
    this.subscribeToSamplePromise()
    this.subscribeToHttpObservable()
    this.subscribeToCustomObservable()

    // Pre defined observer scenario
    this.nums$.pipe(takeUntil(this.destroyed$), filter((r) => r > 0)).subscribe(this.observer);

    // following two subsciptions will get defferent values. Thats why observables are unicast. 
    // To approach multi tasking we can use RxJS Subjects
    this.randomObs$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (r) => console.log('randomObs1-', r)
    });
    this.randomObs$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (r) => console.log('randomObs2-', r)
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe()
  }

}
