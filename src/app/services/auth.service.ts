import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  username: string;

  setUsername(username: string) {
    this.username = username;
    return this.username;
  }

  getUsername() {
    return this.username;
  }
}
