export const splideJs = () => {
    const splideElements = document.querySelectorAll(".splide, .review-slide");
    if (!splideElements.length) return;

    splideElements.forEach(element => {
        new Splide(element).mount();
    });

    const heroSplideElement = document.querySelector(".hero-splide");
    const heroSection = document.getElementById("hero");

    if (heroSplideElement && heroSection) {
        let splide = new Splide(heroSplideElement);

        function updateBackground() {
            let activeSlide = document.querySelector(".splide__slide.is-active");
            if (activeSlide) {
                let bgImage = activeSlide.getAttribute("data-bg");
                heroSection.style.backgroundImage = `url(${bgImage})`;
            }
        }

        splide.on("mounted move", updateBackground);
        splide.mount();
    }
};
