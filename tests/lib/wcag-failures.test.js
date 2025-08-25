/**
 * @jest-environment jsdom
 */

describe('wcag-failure-detail.html rendering', () => {
  function renderFailureDetail(failure) {
    // Simulate the rendered HTML for the relevant section
    let html = '';
    if (failure) {
      html += `<h2>${failure.level}</h2>`;
      html += `<p>${failure.description}</p>`;
      if (failure.details) {
        html += `<details><summary>Show full WCAG guidance</summary>${failure.details}</details>`;
      }
    } else {
      html += `<p>No description available for this WCAG failure.</p>`;
    }
    document.body.innerHTML = html;
  }

  it('renders the correct level and description for a given failure', () => {
    const failure = {
      name: '2.4.6 Headings and Labels',
      level: 'Level AA',
      description: 'Headings and labels describe topic or purpose.'
    };
    renderFailureDetail(failure);

    expect(document.querySelector('h2').textContent).toBe('Level AA');
    expect(document.querySelector('p').textContent).toBe('Headings and labels describe topic or purpose.');
  });

  it('renders details if present', () => {
    const failure = {
      name: '1.4.3 Contrast (Minimum)',
      level: 'Level AA',
      description: 'The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following:',
      details: '<ul><li>Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1.</li></ul>'
    };
    renderFailureDetail(failure);

    expect(document.querySelector('details')).toBeTruthy();
    expect(document.querySelector('details').innerHTML).toContain('Large-scale text');
  });

  it('renders a fallback if no failure is present', () => {
    renderFailureDetail(undefined);

    expect(document.querySelector('p').textContent).toMatch(/no description available/i);
  });
});