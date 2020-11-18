import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: string = '';

  login(username: string) {
    this.username = username;
    return this.username;
  }

  logout() {
    this.username = '';
  }

  isAuthenticated() {
    return this.username != '';
  }

  getUserInfo() {
    return this.username;
  }
}
