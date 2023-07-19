import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetUsers } from 'src/app/store/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private store: Store) { }
  subscription!: Subscription;


  ngOnInit() {
  }

  fetchUsers() {
    this.store.dispatch(new GetUsers())
  }


  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}
