import { describe, expect, it } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError', () => {
  it('should contain the provided status code, message and data', () => {
    const statusCode = 1;
    const message = 'Test';
    const data = { key: 'value' };

    const errorInstance = new HttpError(statusCode, message, data);

    expect(errorInstance.statusCode).toBe(statusCode);
    expect(errorInstance.message).toBe(message);
    expect(errorInstance.data).toBe(data);
  });

  it('should contain undefined as data if no data is provided', () => {
    const statusCode = 1;
    const message = 'Test';

    const errorInstance = new HttpError(statusCode, message);

    expect(errorInstance.statusCode).toBe(statusCode);
    expect(errorInstance.message).toBe(message);
    expect(errorInstance.data).toBeUndefined();
  });
});

describe('class ValidationError', () => {
  it('should contain the provided message', () => {
    const message = 'Invalid';

    const errorInstance = new ValidationError(message);

    expect(errorInstance.message).toBe(message);
  });
});
