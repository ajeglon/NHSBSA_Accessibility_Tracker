/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('2025-pages/quarter-2.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/2025-pages/quarter-2.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should extend content-layout.html', () => {
    expect(html).toMatch(/{%\s*extends\s+"content-layout\.html"\s*%}/);
  });

  it('should contain a block for pageContent or content', () => {
    expect(html).toMatch(/{%\s*block\s+(pageContent|content)\s*%}/);
  });
});