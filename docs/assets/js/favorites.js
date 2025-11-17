/* ============================
    FAVORITES SYSTEM
============================ */

function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function saveFavorites(favs) {
    localStorage.setItem("favorites", JSON.stringify(favs));
}

function isFavorite(slug) {
    return getFavorites().some(f => f.slug === slug);
}

function toggleFavorite(problem) {
    let favs = getFavorites();

    if (isFavorite(problem.slug)) {
        favs = favs.filter(f => f.slug !== problem.slug);
    } else {
        favs.push(problem);
    }

    saveFavorites(favs);
}

function updateFavButtonUI(slug, buttonElement) {
    if (isFavorite(slug)) buttonElement.classList.add("active");
    else buttonElement.classList.remove("active");
}
