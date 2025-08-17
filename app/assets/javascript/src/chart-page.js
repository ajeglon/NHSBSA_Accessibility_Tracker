document.addEventListener('DOMContentLoaded', async function () {
  const canvas = document.getElementById('WCAGFailuresChart');
  const toggleBtn = document.getElementById('toggle-failures-btn');
  if (!canvas || !toggleBtn) return;

  const year = canvas.getAttribute('data-year');
  const quarter = canvas.getAttribute('data-quarter');

  // Fetch JSON filenames for this quarter
  const filesResponse = await fetch(`/api/json-files?year=${year}&quarter=${quarter}`);
  const files = await filesResponse.json();

  if (!Array.isArray(files)) {
    console.error('API did not return an array:', files);
    return;
  }

  // Build full URLs for each file
  const fileUrls = files.map(f => `/data/DAC-Reports/${year}/Quarter-${quarter}/${f}`);

  // Fetch all JSON files
  const responses = await Promise.all(fileUrls.map(url => fetch(url)));
  const jsonData = await Promise.all(responses.map(r => r.json()));

  // Helper to extract failures with their levels
  function extractFailures(data) {
    return [
      ...data.WCAG_A.failed.map(f => ({ level: 'A', name: f })),
      ...data.WCAG_AA.failed.map(f => ({ level: 'AA', name: f })),
      ...data.WCAG_AAA.failed.map(f => ({ level: 'AAA', name: f })),
    ];
  }

  // Combine failures from all files
  const allFailures = jsonData.flatMap(extractFailures);

  // Count occurrences of each failure (by name and level)
  const failureCounts = {};
  allFailures.forEach(f => {
    const key = `${f.name} (${f.level})`;
    failureCounts[key] = (failureCounts[key] || 0) + 1;
  });

  // Function to create a URL-friendly slug
  function slugify(text) {
    return text
      .toString()
      .replace(/^(\d+)\.(\d+)\.(\d+)/, '$1-$2-$3')
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  // Chart instance variable
  let chartInstance = null;
  let showingAll = false;

  function getSortedFailures(all = false) {
    const sorted = Object.entries(failureCounts)
      .sort((a, b) => b[1] - a[1]);
    return all ? sorted : sorted.slice(0, 5);
  }

  function getChartData(sortedFailures) {
    const labels = sortedFailures.map(([key]) => key);
    const data = sortedFailures.map(([, count]) => count);
    const colors = labels.map(label => {
      if (label.includes('(A)')) return 'rgba(23, 104, 17, 0.7)';
      if (label.includes('(AA)')) return 'rgba(169, 100, 22, 0.7)';
      return 'rgba(196, 5, 5, 0.7)';
    });
    return { labels, data, colors };
  }

  function renderChart(sortedFailures) {
    const { labels, data, colors } = getChartData(sortedFailures);
    const ctx = canvas.getContext('2d');
    if (chartInstance) chartInstance.destroy();
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: showingAll ? 'All WCAG Failures' : 'Top 5 WCAG Failures',
          data: data,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
          }
        }
      }
    });
  }

  function renderTable(sortedFailures) {
    const tableDiv = document.getElementById('wcag-failures-table');
    let tableHtml = `
      <h2>${showingAll ? 'All WCAG Failures' : 'Top 5 WCAG Failures'}</h2>
      <table class="nhsuk-table">
        <thead>
          <tr>
            <th>Failure</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
    `;
    sortedFailures.forEach(([key, count]) => {
      const name = key.replace(/\s*\([^)]+\)$/, '');
      const slug = slugify(name);
      tableHtml += `
        <tr>
          <td><a href="/wcag-failures/${slug}">${key}</a></td>
          <td>${count}</td>
        </tr>
      `;
    });
    tableHtml += `
        </tbody>
      </table>
    `;
    tableDiv.innerHTML = tableHtml;
  }

  function updateView() {
    const sortedFailures = getSortedFailures(showingAll);
    renderChart(sortedFailures);
    renderTable(sortedFailures);
    toggleBtn.textContent = showingAll ? 'Show top 5 failures' : 'Show all failures';
  }

  // Initial render (top 5)
  updateView();

  // Toggle on button click
  toggleBtn.addEventListener('click', function () {
    showingAll = !showingAll;
    updateView();
  });
});

