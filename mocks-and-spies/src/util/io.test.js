import { promises as fs } from 'fs';
import { expect, it, vi } from 'vitest';
import writeData from './io';

vi.mock('fs');

it('should execute the writeFile method', () => {
  const testData = 'Test';
  const testFileName = 'test.txt';

  writeData(testData, testFileName);

  expect(fs.writeFile).toHaveBeenCalled();
});
