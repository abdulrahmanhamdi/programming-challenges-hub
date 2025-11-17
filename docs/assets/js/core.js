/* ============================
    THEME CONTROLLER
============================ */
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
}

(function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark-mode");
})();

/* ============================
    HELPERS
============================ */
function escapeHtml(str) {
    return str
        .replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;');
}

function $(id) {
    return document.getElementById(id);
}
