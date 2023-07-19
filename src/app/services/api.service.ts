import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) { }

    getTestUsers() {
        return this.http.get('https://reqres.in/api/users?page=2').pipe(take(1))
    }
}