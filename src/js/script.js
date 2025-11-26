document.addEventListener("DOMContentLoaded", () => {
    const accordeon = document.querySelector(".accordeon");

    if (!accordeon) return;

    const allDetails = accordeon.querySelectorAll("details");

    allDetails.forEach((details) => {
        const summary = details.querySelector("summary");

        if (!summary) return;

        summary.addEventListener("click", (event) => {
            // Le details sur lequel on vient de cliquer
            const currentDetails = event.currentTarget.parentElement;

            // Fermer tous les autres
            allDetails.forEach((det) => {
                if (det !== currentDetails) {
                    det.open = false;
                }
            });
            // On ne touche pas à currentDetails.open :
            // le navigateur va le gérer tout seul (ouvrir/fermer)
        });
    });
});

