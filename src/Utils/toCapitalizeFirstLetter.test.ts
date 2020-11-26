import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  let str: string;
  beforeAll(() => {
    str = toCapitalizeFirstLetter('tEsT');
  });

  test('Функция toCapitalizeFirstLetter должна возвращать строку', () => {
    expect(typeof str).toBe('string');
  });

  test('Принимая пустую строку, функция toCapitalizeFirstLetter должна возвращать пустую строку', () => {
    const empty = toCapitalizeFirstLetter('');
    expect(empty).toBe('');
  });

  test('Первый символ строки, возвращаемой функцией toCapitalizeFirstLetter, должен быть в верхнем регистре', () => {
    expect(str[0]).toBe('T');
  });

  test('Все символы строки, возвращаемой функцией toCapitalizeFirstLetter, кроме первого, должны быть в нижнем регистре', () => {
    expect(str.slice(1)).toBe('est');
  });
});
