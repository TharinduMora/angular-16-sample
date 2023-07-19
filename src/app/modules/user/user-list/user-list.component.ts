import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ReplaySubject } from 'rxjs/internal/ReplaySubject';
import { takeUntil } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user.interface';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  userObjList: any = [];
  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.select(AppState.getUserList).pipe(takeUntil(this.destroyed$)).subscribe((res: any) => {
      this.userObjList = res;
    })
  }

  onClickTile(data: any) {
    console.log(data);

  }

  identify(index: number, item: IUser) {
    return item.id;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe()
  }
}
