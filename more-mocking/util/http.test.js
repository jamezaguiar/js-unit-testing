import { expect, it, vi } from 'vitest';
import { sendDataRequest } from './http';

const responseData = { key: 'value' };
const mockedFetch = vi.fn((url, { method, headers, body }) => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      json: () => {
        return new Promise((resolve, reject) => {
          resolve(responseData);
        });
      },
    };
    resolve(response);
  });
});
vi.stubGlobal('fetch', mockedFetch);

it('should return any available response data', () => {
  const data = { key: 'test' };

  return expect(sendDataRequest(data)).resolves.toStrictEqual(responseData);
});
