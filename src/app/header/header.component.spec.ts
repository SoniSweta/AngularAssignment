import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [AuthService],
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show username', () => {
    authService.setUsername('Test');
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let username = fixture.debugElement.query(By.css('.username'));
      expect(username.nativeElement.textContent).toEqual(component.username);
    });
  });

  it('should not show username', () => {
    authService.setUsername('');
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let username = fixture.debugElement.query(By.css('.username'));
      expect(username).toBeNull();
    });
  });

  it('should logout work', () => {
    authService.setUsername('Test');
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let btn = fixture.debugElement.query(By.css('.logoutbtn'));
      btn.triggerEventHandler('click', null);
      fixture.detectChanges();
      let usernameInHtml = fixture.debugElement.query(By.css('.username'));
      let usernameInService = authService.getUsername();
      expect(usernameInHtml).toBeNull();
      expect(usernameInService).toEqual('');
    });
  });
});
