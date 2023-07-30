import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css'],
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subject: Subject<number> = new Subject();
  bSubject: BehaviorSubject<number> = new BehaviorSubject(0);
  bSubject2: BehaviorSubject<number> = new BehaviorSubject(0);

  rSubject: ReplaySubject<number> = new ReplaySubject(3);

  subs: Subscription = new Subscription();

  triggerSubjectDemo() {
    // no any value will be received
    const subjectObserver1 = this.subject.subscribe((r) => {
      console.log('Subject Observer 1 -', r);
    });
    this.subs.add(subjectObserver1);

    this.subject.next(1);
    // after this emmision, 'Subject Observer 1 - 1' will be logged
    const subjectObserver2 = this.subject.subscribe((r) => {
      // this will not be exucuted
      console.log('Subject Observer 2 -', r);
    });
    this.subs.add(subjectObserver2);
  }

  triggerBSubjectDemo() {
    // behavior subject initial value will be received
    const bSubjectObserver1 = this.bSubject.subscribe((r) => {
      console.log('B Subject Observer 1 -', r);
    });
    this.subs.add(bSubjectObserver1);

    this.bSubject.next(1);
    // behavior subject initial value will be received
    const bSubjectObserver2 = this.bSubject.subscribe((r) => {
      console.log('B Subject Observer 2 -', r);
    });
    this.subs.add(bSubjectObserver2);
  }

  triggerBSubject2Demo() {
    this.bSubject2.next(1);
    this.bSubject2.next(2);
    const bSubject2Observer1 = this.bSubject2.subscribe((r) => {
      // 2 will be logged here. Because last emitted value is 2
      console.log('B Subject 2 Observer 1 -', r);
    });
    this.subs.add(bSubject2Observer1);
  }

  triggerRSubjectDemo() {
    this.rSubject.next(1);
    this.rSubject.next(2);
    this.rSubject.next(3);
    this.rSubject.next(4);
    // only last emmited 3 value will be printed. Because the buffer size is 3.
    const rSubjectObserver1 = this.rSubject.subscribe((r) => {
      console.log('Replay Subject Observer 1 -', r);
    });
    this.subs.add(rSubjectObserver1);
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subs && this.subs.unsubscribe();
  }
}
