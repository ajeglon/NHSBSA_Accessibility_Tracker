/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('content-layout.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/content-layout.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should contain a block for pageContent', () => {
    // Check for the Nunjucks block tag in the template source
    expect(html).toMatch(/{%\s*block\s+pageContent\s*%}/);
  });

  it('should set mainClasses variable', () => {
    expect(html).toMatch(/{%\s*set\s+mainClasses\s*=/);
  });

  it('should import NHSUK macros', () => {
    expect(html).toMatch(/{%\s*from\s+'back-link\/macro\.njk'/);
    expect(html).toMatch(/{%\s*from\s+'button\/macro\.njk'/);
    expect(html).toMatch(/{%\s*from\s+'radios\/macro\.njk'/);
  });

  it('should extend layout.html', () => {
    expect(html).toMatch(/{%\s*extends\s+"layout\.html"\s*%}/);
  });
});