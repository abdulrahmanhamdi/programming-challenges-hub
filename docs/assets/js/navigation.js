/* ============================
    PREVIOUS / NEXT CONTROLLER
============================ */

function setupPrevNext(PROBLEMS, CURRENT_INDEX, callback) {

    const prevBtn = $("prevBtn");
    const nextBtn = $("nextBtn");

    prevBtn.disabled = (CURRENT_INDEX <= 0);
    nextBtn.disabled = (CURRENT_INDEX >= PROBLEMS.length - 1);

    prevBtn.onclick = () => {
        if (CURRENT_INDEX > 0) {
            callback(PROBLEMS[CURRENT_INDEX - 1]);
        }
    };

    nextBtn.onclick = () => {
        if (CURRENT_INDEX < PROBLEMS.length - 1) {
            callback(PROBLEMS[CURRENT_INDEX + 1]);
        }
    };
}
