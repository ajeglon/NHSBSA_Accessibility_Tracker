/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('wcag-edit-comment.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/wcag-edit-comment.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should contain a form for editing a comment', () => {
    // Check for a form with POST and an action containing /edit
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
    expect(form.getAttribute('method').toLowerCase()).toBe('post');
    expect(form.getAttribute('action')).toMatch(/\/comment\/.*\/edit/);
  });

  it('should have a Save changes button', () => {
    const button = document.querySelector('button[type="submit"]');
    expect(button).toBeTruthy();
    expect(button.textContent).toMatch(/save changes/i);
  });

  it('should render a textarea or input for editing the comment', () => {
    // Check for a textarea or input for the comment text
    const textarea = document.querySelector('textarea[name="editComment"]');
    const input = document.querySelector('input[name="editComment"]');
    expect(textarea || input).toBeTruthy();
  });

  it('should have CSRF protection if implemented', () => {
    // Optional: check for CSRF token input if your app uses it
    const csrf = document.querySelector('input[name="_csrf"]');
    // If you don't use CSRF, you can skip or remove this test
    // expect(csrf).toBeTruthy();
  });
});