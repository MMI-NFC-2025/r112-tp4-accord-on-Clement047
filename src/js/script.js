// *** ACCORDEON ***
// src/js/script.js

document.addEventListener("DOMContentLoaded", () => {
    const accordeon = document.querySelector(".accordeon");
    if (!accordeon) return;

    accord[e]on.addEventListener("click", (event) => {
        // On vérifie si on a cliqué sur un <summary> (ou dedans)
        const summary = event.target.closest("summary");
        if (!summary || !accordeon.contains(summary)) return;

        const detailsClique = summary.parentElement; // le <details> correspondant

        // Fermer tous les autres <details>
        accord[e]on.querySelectorAll("details").forEach((det) => {
            if (det !== detailsClique) {
                det.open = false;
            }
        });
    });
});
