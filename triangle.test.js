// Triangles test cases
const triangleType = require('./triangle');

describe('Triangle Type Function', () => {
  test('returns "Equilateral" for sides 3, 3, 3', () => {
    expect(triangleType(3, 3, 3)).toBe('Equilateral');
  });

  test('returns "Isosceles" for sides 3, 3, 4', () => {
    expect(triangleType(3, 3, 4)).toBe('Isosceles');
  });

  test('returns "Scalene" for sides 3, 4, 5', () => {
    expect(triangleType(3, 4, 5)).toBe('Scalene');
  });

  test('returns "Invalid" for zero or negative side', () => {
    expect(triangleType(0, 4, 5)).toBe('Invalid');
    expect(triangleType(-3, 4, 5)).toBe('Invalid');
  });

  test('returns "Invalid" for impossible triangle', () => {
    expect(triangleType(1, 2, 3)).toBe('Invalid');
    expect(triangleType(10, 1, 1)).toBe('Invalid');
  });
});
