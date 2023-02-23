import { describe, expect, it } from 'vitest';
import { generateResultText } from './output';

describe('generateResultText()', () => {
  it('should return a string, no matter which value is passed in', () => {
    const input1 = null;
    const input2 = 2;
    const input3 = false;

    const resultText1 = generateResultText(input1);
    const resultText2 = generateResultText(input2);
    const resultText3 = generateResultText(input3);

    expect(resultText1).toBeTypeOf('string');
    expect(resultText2).toBeTypeOf('string');
    expect(resultText3).toBeTypeOf('string');
  });

  it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = generateResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = generateResultText(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = generateResultText(result);

    expect(resultText).toContain('Invalid');
  });
});
