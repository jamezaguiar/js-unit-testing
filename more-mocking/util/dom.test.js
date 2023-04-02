import fs from 'fs';
import { Window } from 'happy-dom';
import path from 'path';
import { beforeEach, expect, it, vi } from 'vitest';
import { showError } from './dom';

const htmlPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlPath).toString();

const window = new Window();
const document = window.document;

vi.stubGlobal('document', document);

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
  showError('Test');

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).toBeNull();
});

it('should output the provided message in the error paragraph', () => {
  const errorMessage = 'Test';

  showError(errorMessage);

  const errorsEl = document.getElementById('errors');
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph.textContent).toBe(errorMessage);
});
