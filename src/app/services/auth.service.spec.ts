import { AuthService } from "./auth.service";

// Straight Jasmine testing without Angular's testing support
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => { service = new AuthService(); });

  it('#setUsername should return username', () => {
    expect(service.setUsername("Test username")).toBe('Test username');
  });

  it('#getUsername should get username', () => {
    service.setUsername("Test username")
    expect(service.getUsername()).toBe('Test username');
  });
});
