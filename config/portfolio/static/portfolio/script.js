window.addEventListener("scroll", () => {
    document.querySelectorAll(".card").forEach(card => {
        card.style.transform = "translateY(0)";
        card.style.transition = "0.5s";
    });
});
