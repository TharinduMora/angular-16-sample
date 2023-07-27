import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<{ accessToken: string; user: IUser }> {
    
    return of({
      accessToken: 'TEST_TOKEN',
      user: {
        id: 0,
        email: email,
        first_name: 'Test',
        last_name: 'One',
        avatar: 'string',
      },
    }).pipe(take(1));
  }
}
