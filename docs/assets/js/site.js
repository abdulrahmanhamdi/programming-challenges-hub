/* ============================================
   GLOBAL SITE SCRIPT — Programming Challenges Hub
   Features:
   ✔ Theme toggle (with localStorage)
   ✔ Global search engine
   ✔ Auto-fetch problems from PROBLEMS_INDEX.md
   ✔ Shared utilities for all pages
=============================================== */

// -----------------------------------------------------
// THEME TOGGLE (with permanent storage)
// -----------------------------------------------------

// Apply saved theme on load
(function applySavedTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
})();

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    // Save new state
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}



// -----------------------------------------------------
// GLOBAL SEARCH ENGINE
// -----------------------------------------------------
let GLOBAL_INDEX = [];

// Fetch PROBLEMS_INDEX.md and fill GLOBAL_INDEX
fetch('../PROBLEMS_INDEX.md')
  .then(res => res.text())
  .then(text => {
    const lines = text.split("\n");

    lines.forEach(line => {
      if (line.startsWith("| ") && line.includes(".md")) {
        const parts = line.split("|");
        const title = parts[1].trim();
        const difficulty = parts[2].trim();
        const link = parts[3].match(/\((.*)\)/)[1];

        GLOBAL_INDEX.push({
          title,
          difficulty,
          link,
          type: "problem"
        });
      }
    });
  });


// Search function
function globalSearch(query) {
    query = query.toLowerCase();

    const results = GLOBAL_INDEX.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.difficulty.toLowerCase().includes(query)
    );

    return results;
}


// Render search results into a container
function renderSearchResults(results, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    if (results.length === 0) {
        container.innerHTML = `<p class='text-muted'>No results found.</p>`;
        return;
    }

    results.forEach(r => {
        const card = `
        <div class="col-md-4 mb-3 animate-fade">
            <div class="card p-3 shadow-sm">
                <h5>${r.title}</h5>
                <p><strong>Difficulty:</strong> ${r.difficulty}</p>
                <a href="../${r.link}" target="_blank">Open Problem →</a>
            </div>
        </div>
        `;

        container.innerHTML += card;
    });
}


// Attach search bar to engine
function setupSearch(inputId, containerId) {
    const searchInput = document.getElementById(inputId);
    if (!searchInput) return;

    searchInput.addEventListener("keyup", () => {
        const query = searchInput.value;
        const results = globalSearch(query);

        renderSearchResults(results, containerId);
    });
}

