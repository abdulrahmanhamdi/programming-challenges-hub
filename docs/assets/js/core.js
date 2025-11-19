/* ============================
    THEME CONTROLLER
============================ */
function toggleTheme() {
    // Toggle dark-mode class
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    // Save theme preference
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update theme icon after switching
    updateThemeIcon();
}

/* Update the theme icon (sun / moon) */
function updateThemeIcon() {
    const icon = document.getElementById("themeIcon");

    if (icon) {
        if (document.body.classList.contains("dark-mode")) {
            icon.className = "bi bi-sun-fill fs-5";   // Sun icon (dark mode)
        } else {
            icon.className = "bi bi-moon-stars-fill fs-5"; // Moon icon (light mode)
        }
    }
}

/* ============================
    INIT THEME ON PAGE LOAD
============================ */
(function initTheme() {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
        document.body.classList.add("dark-mode");
    }

    // Ensure icon matches theme after DOM is ready
    window.addEventListener("DOMContentLoaded", updateThemeIcon);
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
