document.addEventListener('DOMContentLoaded', async function () {
  // Get all JSON filenames from the API
  const filesResponse = await fetch('/api/json-files');
  const files = await filesResponse.json();

  // Build full URLs for each file
  const fileUrls = files.map(f => `/data/DAC-Reports/2025/Quarter-1/${f}`);

  // Fetch all JSON files
  const responses = await Promise.all(fileUrls.map(url => fetch(url)));
  const jsonData = await Promise.all(responses.map(r => r.json()));

  // Helper to extract failures with their levels
  function extractFailures(data) {
    return [...data.WCAG_A.failed.map(f => ({
      level: 'A',
      name: f
    })), ...data.WCAG_AA.failed.map(f => ({
      level: 'AA',
      name: f
    })), ...data.WCAG_AAA.failed.map(f => ({
      level: 'AAA',
      name: f
    }))];
  }

  // Combine failures from all files
  const allFailures = jsonData.flatMap(extractFailures);

  // Count occurrences of each failure (by name and level)
  const failureCounts = {};
  allFailures.forEach(f => {
    const key = `${f.name} (${f.level})`;
    failureCounts[key] = (failureCounts[key] || 0) + 1;
  });

  // Sort and get top 5 failures
  const sortedFailures = Object.entries(failureCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  // Prepare chart labels and data for top 5
  const labels = sortedFailures.map(([key]) => key);
  const data = sortedFailures.map(([, count]) => count);
  const colors = labels.map(label => {
    if (label.includes('(A)')) return 'rgba(23, 104, 17, 0.7)';
    if (label.includes('(AA)')) return 'rgba(169, 100, 22, 0.7)';
    return 'rgba(196, 5, 5, 0.7)';
  });

  // Create the chart
  const ctx = document.getElementById('WCAGFailuresChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Top 5 WCAG Failures',
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });

  // Function to create a URL-friendly slug
  function slugify(text) {
    return text.toString().toLowerCase().replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-()]+/g, '') // Remove all non-word chars except ()
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
  }

  // Render the table of top 5 failures
  const tableDiv = document.getElementById('wcag-failures-table');
  let tableHtml = `
    <h2>Top 5 WCAG Failures</h2>
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
    // Extract just the failure name (remove the level in parentheses for the link)
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
});