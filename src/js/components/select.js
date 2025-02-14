import SlimSelect from 'slim-select';

const countries = [
    {
        text: 'Fr',
        value: 'FR',
        html: '<span class="flex gap-[0.4rem] items-center"><span>FR</span><svg  width="17" height="14" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18"><path fill="#E1000F" d="M345.04 0h139C499.44.1 512 12.72 512 28.13v299.91c0 15.47-12.65 28.13-28.13 28.14H345.04V0zM15.11 352.95zm-9.54-8.15z"/><path fill="#fff" d="M27.96 0h317.08v356.18H27.98C12.57 356.09 0 343.46 0 328.04V28.14C0 12.72 12.56.1 27.96 0z"/><path fill="#273375" d="M27.96 0h138.99v356.18H28c-15.42-.08-28-12.71-28-28.14V28.14C0 12.72 12.56.1 27.96 0z"/></svg><span>'
    },
    {
        text: 'En',
        value: 'En',
        html: '<span class="flex gap-[0.4rem] items-center"><span>EN</span><svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_45_1098)"><rect width="17" height="14" rx="1" fill="#1A47B8"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.80845 0H0V2.33333L15.1817 14L17 14V11.6667L1.80845 0Z" fill="white"/><path d="M0.603175 0L17 12.6331V14H16.411L0 1.35385V0H0.603175Z" fill="#F93939"/><path fill-rule="evenodd" clip-rule="evenodd" d="M15.381 0H17.0001V2.33333C17.0001 2.33333 6.48419 10.1062 1.61911 14H6.10352e-05V11.6667L15.381 0Z" fill="white"/><path d="M17 0H16.4509L0 12.644V14H0.603175L17 1.36408V0Z" fill="#F93939"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.1824 0H10.8317V4.31836H17V9.67879H10.8317V14H6.1824V9.67879H0V4.31836H6.1824V0Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7.15789 0H9.8421V5.38462H17V8.61539H9.8421V14H7.15789V8.61539H0V5.38462H7.15789V0Z" fill="#F93939"/></g><defs><clipPath id="clip0_45_1098"><rect width="17" height="14" rx="1" fill="white"/></clipPath></defs></svg><span>'
    },
];

export const select = (selector) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const slim = new SlimSelect({
            select: element,
            settings: {
                showSearch: false 
            }
        });
        if (element.classList.contains('slim-select-lang')) {
            slim.setData(countries);
        }
    });
    
};