import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { GetUsers } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.state';
import { Logout } from '../../../store/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private store: Store) {}
  subscription!: Subscription;
  userList!: IUser[];

  ngOnInit() {
    this.subscription = this.store
      .select(AppState.getUserList)
      .subscribe((res) => {
        this.userList = res;
      });
  }

  fetchUsers() {
    this.store.dispatch(new GetUsers());
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
