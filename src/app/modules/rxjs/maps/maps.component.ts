import { Component } from '@angular/core';
import {
  delay,
  mergeMap,
  Observable,
  of,
  Subscription,
  switchMap,
  take,
} from 'rxjs';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent {
  inputValue: string = '';

  sub!: Subscription;

  fetchData() {
    this.sub = this.subService(this.inputValue)
      .pipe(
        take(1),
        switchMap((r) => r)
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  subService(input: string): Observable<string> {
    return of(input).pipe(delay(100));
  }

  ngOnDestroy() {
    this.sub && this.sub.unsubscribe();
  }
}
