import { describe, expect, it } from 'vitest';
import { validateNumber, validateStringNotEmpty } from './validation';

describe('validateStringNotEmpty()', () => {
  it('should throw an error if string is empty', () => {
    const input = '';

    const validateFn = () => validateStringNotEmpty(input);

    expect(validateFn).toThrow(/must not be empty/i);
  });

  it('should not throw an error if a valid string is provided', () => {
    const input = 'valid';

    const validateFn = () => validateStringNotEmpty(input);

    expect(validateFn).not.toThrow();
  });
});

describe('validateNumber()', () => {
  it('should throw an error if number is not valid', () => {
    const input = 'invalid';

    const validateFn = () => validateNumber(input);

    expect(validateFn).toThrow(/invalid number input/i);
  });

  it('should throw an error if the provided number is not of the number type', () => {
    const input = '1';

    const validateFn = () => validateNumber(input);

    expect(validateFn).toThrow(/invalid number input/i);
  });

  it('should not throw an error if a valid number is provided', () => {
    const input = 1;

    const validateFn = () => validateNumber(input);

    expect(validateFn).not.toThrow();
  });
});
