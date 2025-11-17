/* ============================
    GLOBAL SEARCH ENGINE
============================ */

function setupSearch(inputId, resultsContainerId) {
    const input = $(inputId);
    const container = $(resultsContainerId);

    if (!input) return;

    input.addEventListener("input", async () => {
        const q = input.value.trim().toLowerCase();

        if (!q) {
            container.innerHTML = "";
            return;
        }

        const problems = await loadProblemsIndex();

        const filtered = problems.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.difficulty.toLowerCase().includes(q)
        );

        container.innerHTML = filtered.map(p => `
            <div class="col-md-4 animate-slide-up">
                <div class="card p-3 shadow-sm">
                    <h5>${p.title}</h5>
                    <p class="text-muted">${p.difficulty}</p>

                    <a href="problem.html?id=${p.link}"
                    class="btn btn-sm btn-outline-primary mt-2">
                        View Problem →
                    </a>

                    <a href="solution.html?slug=${p.slug}"
                    class="btn btn-sm btn-outline-success mt-2">
                        View Solutions →
                    </a>
                </div>
            </div>
        `).join("");
    });
}

/* helper: load problems index */
async function loadProblemsIndex() {
    const text = await fetch(CONFIG.PROBLEMS_INDEX).then(r => r.text());
    const lines = text.split("\n");

    let arr = [];

    lines.forEach(line => {
        if (line.startsWith("| ") && line.includes(".md")) {
            const parts = line.split("|");
            const title = parts[1].trim();
            const difficulty = parts[2].trim();
            const link = parts[3].match(/\((.*)\)/)[1];
            const slug = link.split("/").pop().replace(".md", "");

            arr.push({ title, difficulty, link, slug });
        }
    });

    return arr;
}
