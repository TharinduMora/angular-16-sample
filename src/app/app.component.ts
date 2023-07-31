import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUsers } from './store/app.actions';
import { HoverDirective } from './core/directives/hover.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HoverDirective]
})
export class AppComponent {
  title = 'angular-sample';

  constructor(private store: Store) { }

  ngOnInit() { }
}
