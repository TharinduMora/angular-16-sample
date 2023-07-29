import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { Login, Logout } from './auth.actions';

export interface AuthStateModel {
  isLoggedIn: boolean;
  accessToken?: string;
  user?: IUser;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    isLoggedIn: true,
  },
})
@Injectable()
export class AuthState {
  constructor(
    private readonly authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  @Selector()
  static isLoggedIn(state: AuthStateModel): boolean {
    return state.isLoggedIn;
  }

  @Action(Login)
  async login(ctx: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.email, action.password).pipe(
      tap({
        next: (res) => {
          if (res.accessToken) {
            ctx.patchState({
              accessToken: res.accessToken,
              user: res.user,
              isLoggedIn: true,
            });
            this.ngZone.run(() => {
              this.router.navigate(['']);
            });
          }
        },
      })
    );
  }

  @Action(Logout)
  async logout(ctx: StateContext<AuthStateModel>, action: Logout) {
    ctx.setState({ isLoggedIn: false });
    this.router.navigate(['auth']);
  }
}
