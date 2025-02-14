import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

export const splideJs = () => {
    const splideElements = document.querySelectorAll(".splide");
    if (!splideElements.length) return;

    splideElements.forEach(element => {
        const splide = new Splide(element, {
            classes: {
                pagination: 'splide__pagination absolute top-[45rem] w-full [&>li>.is-active]:bg-orange-500 [&>li>.is-active]:bg-opacity-100 max-md:top-[33rem] max-sm:top-[36rem]',
                page      : 'splide__pagination__page w-[0.8rem] h-[0.8rem] bg-[#D6D6D6] bg-opacity-40 m-[9px] rounded-full ',
          },
        });
        splide.mount();
    });

};
