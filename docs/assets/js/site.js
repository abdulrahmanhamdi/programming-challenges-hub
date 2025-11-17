// Global Search Engine for Programming Challenges Hub
// Works across: Problems, Solutions, Index

let GLOBAL_INDEX = [];

// Fetch Problems Index
fetch('../PROBLEMS_INDEX.md')
  .then(res => res.text())
  .then(text => {
    const lines = text.split("\n");

    lines.forEach(line => {
      if (line.startsWith('| ') && line.includes('.md')) {
        const parts = line.split('|');
        const title = parts[1].trim();
        const difficulty = parts[2].trim();
        const link = parts[3].match(/\((.*)\)/)[1];

        GLOBAL_INDEX.push({
          title,
          difficulty,
          link,
          type: 'problem'
        });
      }
    });
  });

// GLOBAL SEARCH FUNCTION
function globalSearch(query) {
  query = query.toLowerCase();
  const results = GLOBAL_INDEX.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.difficulty.toLowerCase().includes(query)
  );
  return results;
}

// RENDER RESULTS INTO ANY PAGE
function renderSearchResults(results, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  if (results.length === 0) {
    container.innerHTML = `<p class='text-muted'>No results found.</p>`;
    return;
  }

  results.forEach(r => {
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card p-3 shadow-sm">
          <h5>${r.title}</h5>
          <p><strong>Difficulty:</strong> ${r.difficulty}</p>
          <a href="../${r.link}" target="_blank">Open</a>
        </div>
      </div>`;

    container.innerHTML += card;
  });
}

// EVENT LISTENER (NAVBAR SEARCH BOX)
function setupSearch(inputId, containerId) {
  const searchInput = document.getElementById(inputId);

  searchInput.addEventListener('keyup', () => {
    const query = searchInput.value;
    const results = globalSearch(query);
    renderSearchResults(results, containerId);
  });
}
