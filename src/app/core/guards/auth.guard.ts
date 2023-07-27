import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../../store/auth/auth.state';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isLoggedIn =
    inject(Store).selectSnapshot(AuthState.isLoggedIn) || false;
  if (!isLoggedIn) {
    inject(Router).navigate(['auth']);
    return false;
  }
  return true;
};
