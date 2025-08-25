/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('index.html', () => {
  let html;

  beforeAll(() => {
    // Adjust the path if your index.html is elsewhere
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/index.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should have a main heading', () => {
    const h1 = document.querySelector('h1');
    expect(h1).toBeTruthy();
    // Optionally check text content
    // expect(h1.textContent).toMatch(/Accessibility Tracker/i);
  });

  it('should have navigation links to 2024 and 2025 pages', () => {
    const links = Array.from(document.querySelectorAll('a')).map(a => a.getAttribute('href'));
    expect(links).toEqual(
      expect.arrayContaining([
        expect.stringContaining('2024-pages/quarter-1'),
        expect.stringContaining('2025-pages/quarter-1')
      ])
    );
    // Add more as needed
  });
});