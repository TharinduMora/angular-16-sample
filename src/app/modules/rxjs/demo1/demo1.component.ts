import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, concat, debounceTime, from, fromEvent, map, timeInterval } from 'rxjs';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  nums = [0, 2, 4, 5, 8, 10];

  click$ = fromEvent(document, 'click')

  numsObservable$ = from(this.nums);

  // observable can emit one error or complete. As soon as an error emited, observable excution will be stopped
  errorScenario$ = new Observable((observer) => {
    for (let num of this.nums) {
      if (num % 2 === 0) {
        observer.next(num)
      } else {
        observer.error('not an even number')
      }
    }
    observer.complete()
  })

  observer = {
    next: (res: any) => {
      console.log(`Result - ${res}`);
    },
    error: (err: any) => {
      console.log(`Error - ${err}`);
    },
    complete: () => {
      console.log(`All done`);
    }
  }

  ngOnInit(): void {
    // this.subs.push(this.numsObservable$.pipe(take(1)).subscribe(this.observer));
    this.subs.push(this.errorScenario$.subscribe(this.observer));

    // usage of operators
    this.subs.push(this.click$.pipe(
      debounceTime(100),
      map((x: any) => {
        return {
          x: x.clientX,
          y: x.clientY
        }
      }),
      timeInterval(), map((m) => `${m.interval} - (${m.value.x},${m.value.y})`))
      .subscribe((r) => {
        console.log(r);
      }));

    // concat combines multiple observales into one observable
    this.subs.push(
      concat(this.numsObservable$, this.errorScenario$).subscribe((v) => console.log(`concat - ${v}`))
    )
  }

  ngOnDestroy(): void {
    this.subs && this.subs.forEach(s => s.unsubscribe())
  }

}
