/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('layout.html', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(
      path.resolve(__dirname, '../../app/views/layout.html'),
      'utf8'
    );
  });

  beforeEach(() => {
    document.documentElement.innerHTML = html;
  });

  it('should extend prototype-kit-template.njk', () => {
    expect(html).toMatch(/{%\s*extends\s+"prototype-kit-template\.njk"\s*%}/);
  });

  it('should contain a block for head', () => {
    expect(html).toMatch(/{%\s*block\s+head\s*%}/);
  });

  it('should contain a block for header', () => {
    expect(html).toMatch(/{%\s*block\s+header\s*%}/);
  });

  it('should contain a block for footer', () => {
    expect(html).toMatch(/{%\s*block\s+footer\s*%}/);
  });

  it('should contain a block for bodyEnd', () => {
    expect(html).toMatch(/{%\s*block\s+bodyEnd\s*%}/);
  });

  it('should include NHSUK frontend JS', () => {
    expect(html).toMatch(/nhsuk-frontend\/nhsuk\.min\.js/);
  });
});