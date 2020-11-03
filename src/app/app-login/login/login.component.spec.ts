import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      providers: [AuthService],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display username', () => {
    component.username = 'Test';
    component.password = 'Test';
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let username = fixture.debugElement.query(By.css('.username'));
      expect(username.nativeElement.value).toContain(component.username);
    });
  });

  it('should display password', () => {
    component.username = 'Test';
    component.password = 'Test';
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let username = fixture.debugElement.query(By.css('.password'));
      expect(username.nativeElement.value).toContain(component.password);
    });
  });

  it('should login', () => {
    component.username = 'Test@gmail.com';
    component.password = 'Test';
    authService.login('Test@gmail.com');
    component.ngOnInit();
    let btn = fixture.debugElement.query(By.css('.loginbtn'));
    btn.triggerEventHandler('click', null);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let usernameInService = authService.getUserInfo();
      expect(usernameInService).toEqual('Test@gmail.com');
    });
  });

  it('should login method test', () => {
    component.username = 'Test@gmail.com';
    component.password = 'Test';
    component.onLogin();
    let usernameInService = authService.getUserInfo();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(usernameInService).toEqual('Test@gmail.com');
    });
  });
});
