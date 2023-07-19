import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sample';

  constructor(private store: Store) { }

  ngOnInit() { }
}
