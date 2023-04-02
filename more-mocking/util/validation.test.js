import { expect, it } from 'vitest';
import { validateNotEmpty } from './validation.js';

it('should not throw an error if the given text argument is a valid text', () => {
  const text = 'My Valid Text';

  const resultFn = () => validateNotEmpty(text);

  expect(resultFn).not.toThrow();
});

it('should throw an error if an empty string is provided', () => {
  const text = '';
  const errorMessage = 'Text is empty';

  const resultFn = () => validateNotEmpty(text, errorMessage);

  expect(resultFn).toThrow(errorMessage);
});

it('should throw an error if an empty string with blank spaces is provided', () => {
  const text = '     ';
  const errorMessage = 'Text is empty';

  const resultFn = () => validateNotEmpty(text, errorMessage);

  expect(resultFn).toThrow(errorMessage);
});

it('should throw an error if text is null or undefined', () => {
  const text = null;
  const text2 = undefined;
  const errorMessage = 'Text is empty';

  const resultFn = () => validateNotEmpty(text, errorMessage);
  const resultFn2 = () => validateNotEmpty(text2, errorMessage);

  expect(resultFn).toThrow(errorMessage);
  expect(resultFn2).toThrow(errorMessage);
});
