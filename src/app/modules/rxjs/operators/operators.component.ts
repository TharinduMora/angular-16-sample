import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject, Subscription, catchError, concatMap, delay, map, mergeMap, of, switchMap, takeUntil, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, OnDestroy {

  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  subscriptions: Subscription = new Subscription();

  srcObservable$ = of(1, 2, 3, 4);
  innerObservable$ = of('A', 'B', 'C').pipe(
    delay(Math.random() * 2000), map(v => {
      // if (v === 'B') {
      //   throw new Error()
      // }
      return v;
    })
  )

  testInnerObservable(delayOneSec: boolean) {
    return new Observable(obs => {
      if (delayOneSec) {
        setTimeout(() => {
          obs.next('A')
          obs.complete()
        }, 1000)
      } else {
        obs.next('B')
        obs.complete()
      }
    })
  }

  // Usages of mergeMap, ConcatMap and switchMap
  mapOperatorsChainingExamples() {
    /**
     * The project function is the first argument to the MergeMap. It takes the values from the srcObservable. 
     * For each value, it receives from the srcObservable (i. e. 1,2,3 &4) it creates a new observable i.e. innerObservable.
     * 
     * MergeMap automatically subscribes to the innerObservable returned by the project function. 
     * The innerObservable emits the values (A, B, C, D), and pushes it to the stream.
     * 
     * Hence the subscribers will receive the values A, B, C, D four times. Once for each value of the srcObservable.
     */
    this.srcObservable$.pipe(
      takeUntil(this.destroyed$),
      mergeMap((val, index) => {
        // console.log('Source value ' + val);
        // return this.innerObservable$.pipe(
        //   catchError(e => of('mergeMap Error Occured in inner obs')),
        //   map((r) => `${val} -> ${r}`))

        return this.testInnerObservable(val % 2 === 0).pipe(
          catchError(e => of('mergeMap Error Occured in inner obs')),
          map((r) => `[${index}]${val} -> ${r}`))
      })
    ).subscribe((ret: any) => {
      console.log('Merge Map Final Result ' + ret);
    })

    /* Switch Map only returns final result of the innerObservable **/

    // this.srcObservable$.pipe(
    //   takeUntil(this.destroyed$),
    //   switchMap((val, index) => {
    //     return this.innerObservable$.pipe(
    //       catchError(e => of('switchMap Error Occured in inner obs')),
    //       map((r) => `[${index}]${val} -> ${r}`))
    //   })
    // ).subscribe((ret: any) => {
    //   console.log('Switch Map Final Result ' + ret);
    // })

    /**  concatMap does not subscribe to the next observable until the previous completes.
     *  And also concatMap maintain the order of emission
    */

    this.srcObservable$.pipe(
      takeUntil(this.destroyed$),
      concatMap((val, index) => {
        // return this.innerObservable$.pipe(
        return this.testInnerObservable(val % 2 === 0).pipe(
          catchError(e => of('Concat Map Error Occured in inner obs')),
          map((r) => `[${index}]${val} -> ${r}`))
      })
    ).subscribe((ret: any) => {
      console.log('Concat Map Final Result ' + ret);
    })
  }

  // Example of mergeMap flatten
  mergeMapFlatten$ = ajax.getJSON('https://reqres.in/api/users?page=2');
  subscribeToMergeMapFalttenExample() {
    this.subscriptions.add(
      // here mergeMap catch the ajaxResponse and converts(flatten) ajaxResponse.data into individual data object stream
      this.mergeMapFlatten$.pipe(
        mergeMap((ajaxResponse: any) => ajaxResponse.data)
      ).subscribe({
        next: (res) => {
          console.log(res);
        }, error: () => {
          console.log('error');
        }, complete: () => {
          console.log('completed');
        }
      })
    )
  }

  ngOnInit(): void {
    this.mapOperatorsChainingExamples()
  }

  ngOnDestroy(): void {
    this.subscriptions && this.subscriptions.unsubscribe()
  }

}
