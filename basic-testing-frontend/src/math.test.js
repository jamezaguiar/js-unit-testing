import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  const inputs = [1, 2, 3];
  const expectedResult = inputs.reduce((prev, curr) => prev + curr, 0);

  const result = add(inputs);

  expect(result).toBe(expectedResult);
});

it('should yield NaN if a least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
  const inputs = ['1', '2'];
  const expectedResult = inputs.reduce((prev, curr) => +prev + +curr, 0);

  const result = add(inputs);

  expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
  const inputs = [];

  const result = add(inputs);

  expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => add();

  expect(resultFn).toThrow();
});
