import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

describe('Logged in guard should', () => {
  let authGuardService: AuthGuardService;
  let authService: AuthService;
  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  // beforeEach
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule, CommonModule],
      providers: [
        AuthGuardService,
        AuthService,
      ],
    }).compileComponents(); // compile template and css

    authGuardService = TestBed.inject(AuthGuardService);
    authService = TestBed.inject(AuthService);
  });

  it('be able to hit route when user is logged in', () => {
    authService.login('Test username');
    expect(authGuardService.canActivate()).toBe(true);
  });

  it('not be able to hit route when user is not logged in', () => {
    authService.logout();
    expect(authGuardService.canActivate()).toBe(false);
  });
});
