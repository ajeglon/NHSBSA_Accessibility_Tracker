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

  // Prepare chart labels and data
  const labels = Object.keys(failureCounts);
  const data = Object.values(failureCounts);
  const colors = labels.map(label => {
    if (label.includes('(A)')) return 'rgba(255, 99, 132, 0.7)';
    if (label.includes('(AA)')) return 'rgba(54, 162, 235, 0.7)';
    return 'rgba(255, 206, 86, 0.7)';
  });

  // Create the chart
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'WCAG Failure Count',
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
});