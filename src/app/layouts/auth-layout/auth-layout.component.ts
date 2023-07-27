import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from '../../store/auth/auth.actions';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css'],
})
export class AuthLayoutComponent {
  constructor(private store: Store) {}
  login() {
    this.store.dispatch(new Login('test@gmail.com', '1234'));
  }
}
