/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('wcag-failure-detail.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/wcag-failure-detail.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should extend content-layout.html', () => {
    expect(html).toMatch(/{%\s*extends\s+"content-layout\.html"\s*%}/);
  });

  it('should import the details macro', () => {
    expect(html).toMatch(/{%\s*from\s+'details\/macro\.njk'\s+import\s+details\s*%}/);
  });

  it('should contain a block for pageContent or content', () => {
    // Check for either block, depending on your template structure
    expect(html).toMatch(/{%\s*block\s+(pageContent|content)\s*%}/);
  });

  // Optionally, check for expected placeholders or variables
  it('should contain placeholders for dynamic content', () => {
    expect(html).toMatch(/{{\s*.*\s*}}/);
  });
});