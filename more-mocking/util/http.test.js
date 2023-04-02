import { expect, it, vi } from 'vitest';
import { HttpError } from './errors';
import { sendDataRequest } from './http';

const nonStringBodyRejectMessage = 'Not a string.';
const responseData = { key: 'value' };
const mockedFetch = vi.fn((url, { method, headers, body }) => {
  if (typeof body !== 'string') {
    return reject(nonStringBodyRejectMessage);
  }
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

it('should parse data to JSON string before sending the request', async () => {
  const data = { key: 'test' };

  let errorMessage;

  try {
    await sendDataRequest(data);
  } catch (e) {
    errorMessage = e;
  }

  expect(errorMessage).not.toBe(nonStringBodyRejectMessage);
});

it('should throw an HttpError in case of non-ok responses', () => {
  mockedFetch.mockImplementationOnce((url, { method, headers, body }) => {
    return new Promise((resolve, reject) => {
      const response = {
        ok: false,
        json: () => {
          return new Promise((resolve, reject) => {
            resolve(responseData);
          });
        },
      };
      resolve(response);
    });
  });

  const data = { key: 'test' };

  return expect(sendDataRequest(data)).rejects.toBeInstanceOf(HttpError);
});
