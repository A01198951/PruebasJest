// Kevin Garcia Sotelo
// A01198951
// PRUEBAS UNITARIAS
const tipoDeTriangulo = require('./triangle');

describe('Función tipoDeTriangulo', () => {

  // Aquí se prueba que si los lados son iguales, se espera que retorne Equilátero
  test('debe retornar "Equilatero" para los lados 3, 3, 3', () => {
    expect(tipoDeTriangulo(3, 3, 3)).toBe('Equilateral');
  });

  // Aquí se prueba que si dos lados son iguales y el otro diferente, se espera que retorne Isósceles
  test('debe retornar Isosceles para los lados 3, 3, 4', () => {
    expect(tipoDeTriangulo(3, 3, 4)).toBe('Isosceles');
  });

  // Aquí se prueba que si los lados son diferentes, se espera que retorne Escaleno
  test('debe retornar Escaleno para los lados 3, 4, 5', () => {
    expect(tipoDeTriangulo(3, 4, 5)).toBe('Scalene');
  });


  // Aquí se prueba que si algún lado es cero o negativo,
  test('debe retornar Invalid si algún lado es cero o negativo', () => {
    expect(tipoDeTriangulo(0, 4, 5)).toBe('Invalid');
    expect(tipoDeTriangulo(-3, 4, 5)).toBe('Invalid');
  });

  // Aquí se prueba que si la suma de dos lados no es mayor al tercero,
  test('debe retornar Invalid si no se puede formar un triángulo', () => {
    expect(tipoDeTriangulo(1, 2, 3)).toBe('Invalid');
    expect(tipoDeTriangulo(10, 1, 1)).toBe('Invalid');
  });
});
