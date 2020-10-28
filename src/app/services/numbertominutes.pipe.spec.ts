import { NumberToMinutes } from "./numbertominutes.pipe";

describe('NumberToMinutes', () => {
  // This pipe is a pure, stateless function so no need for BeforeEach
  const pipe = new NumberToMinutes();

  it('transforms hours and minutes', () => {
    expect(pipe.transform(90)).toBe('1h 30 min ');
  });

  it('transforms minutes', () => {
    expect(pipe.transform(28)).toBe('28 min ');
  });
});
