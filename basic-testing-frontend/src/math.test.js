import { expect, it } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce((prev, curr) => (prev += curr), 0);

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});
