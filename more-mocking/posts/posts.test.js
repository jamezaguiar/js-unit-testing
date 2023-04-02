import { beforeEach, describe, expect, it } from 'vitest';
import { extractPostData } from './posts';

describe.todo('savePost()');

describe('extractPostData()', () => {
  const testTitle = 'Test title';
  const testContent = 'Test content';
  let formData;

  beforeEach(() => {
    formData = {
      title: testTitle,
      content: testContent,
      get(key) {
        return this[key];
      },
    };
  });

  it('should extract title and content from the provided form data', () => {
    const { title, content } = extractPostData(formData);

    expect(title).toBe(testTitle);
    expect(content).toBe(testContent);
  });
});
