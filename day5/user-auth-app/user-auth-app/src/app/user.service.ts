import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  login(usernameOrEmail: string, password: string): Observable<boolean> {
    // Implement login logic here
    const isAuthenticated = true; // Dummy authentication
    this.loggedIn.next(isAuthenticated);
    return this.loggedIn.asObservable();
  }

  logout() {
    // Implement logout logic here
    this.loggedIn.next(false);
  }
}
