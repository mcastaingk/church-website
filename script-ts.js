document.addEventListener("DOMContentLoaded", () => {
    const outreachCarousel = document.querySelector(".outreach-carousel");
    const prevBtn = document.getElementById("carousel-prev");
    const nextBtn = document.getElementById("carousel-next");

    let scrollPosition = 0;

    function updateScroll(direction) {
        const scrollAmount = 300;
        scrollPosition += direction === "next" ? scrollAmount : -scrollAmount;
        outreachCarousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth",
        });
    }

    prevBtn.addEventListener("click", () => updateScroll("prev"));
    nextBtn.addEventListener("click", () => updateScroll("next"));
});