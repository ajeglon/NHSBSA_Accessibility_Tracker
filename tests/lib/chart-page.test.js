/**
 * @jest-environment jsdom
 */

describe('chart-page.js DAC Report folder integration for all 2024 and 2025 quarters', () => {
  const years = ['2024', '2025'];
  const quarters = ['1', '2', '3', '4'];

  beforeEach(() => {
    // Mock Chart.js global
    global.Chart = jest.fn().mockImplementation(() => ({
      destroy: jest.fn()
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  years.forEach(year => {
    quarters.forEach(quarter => {
      it(`renders a chart for ${year} Quarter ${quarter} if DAC Report files exist and contain failures`, async () => {
        // Set up the DOM for this year and quarter
        document.body.innerHTML = `
          <canvas id="WCAGFailuresChart" data-year="${year}" data-quarter="${quarter}"></canvas>
          <button id="toggle-failures-btn"></button>
          <div id="wcag-failures-table"></div>
        `;

        // Mock fetch: API returns a file, file contains failures
        global.fetch = jest.fn()
          .mockResolvedValueOnce({
            json: async () => [`test-report-${year}-q${quarter}.json`]
          })
          .mockResolvedValueOnce({
            json: async () => ({
              WCAG_A: { failed: [`A${year}${quarter}`], passed: [] },
              WCAG_AA: { failed: [`AA${year}${quarter}`], passed: [] },
              WCAG_AAA: { failed: [], passed: [] }
            })
          });

        // Import the script (registers DOMContentLoaded handler)
        require('../../app/assets/javascript/src/chart-page.js');

        // Trigger DOMContentLoaded
        document.dispatchEvent(new Event('DOMContentLoaded'));

        // Wait for all promises to resolve
        await new Promise(resolve => setTimeout(resolve, 0));

        // Chart should have been constructed
        expect(global.Chart).toHaveBeenCalled();

        // Table should contain the failures
        const tableDiv = document.getElementById('wcag-failures-table');
        expect(tableDiv.innerHTML).toContain(`A${year}${quarter}`);
        expect(tableDiv.innerHTML).toContain(`AA${year}${quarter}`);
      });
    });
  });
});