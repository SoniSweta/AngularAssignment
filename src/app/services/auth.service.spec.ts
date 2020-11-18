import { AuthService } from "./auth.service";

// Straight Jasmine testing without Angular's testing support
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => { service = new AuthService(); });

  it('#setUsername should return username', () => {
    expect(service.login("Test username")).toBe('Test username');
  });

  it('#getUsername should get username', () => {
    service.login("Test username")
    expect(service.getUserInfo()).toBe('Test username');
  });
});
