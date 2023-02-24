import { describe, expect, it } from 'vitest';
import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
  it('should transform a string number to a number of type number', () => {
    const input = '1';

    const result = transformToNumber(input);

    expect(result).toBe(1);
    expect(result).toBeTypeOf('number');
  });

  it('should yield NaN if the argument is not a numeric string', () => {
    const input = 'invalid';
    const input2 = {};

    const result = transformToNumber(input);
    const result2 = transformToNumber(input2);

    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2', '3'];
    const expectedValue = numberValues.map(Number);

    const result = cleanNumbers(numberValues);

    expect(result).toStrictEqual(expectedValue);
  });

  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const resultFn = () => cleanNumbers(numberValues);

    expect(resultFn).toThrow();
  });
});
