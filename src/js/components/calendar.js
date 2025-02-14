import flatpickr from "flatpickr";


export const flatPickr = (selector) => {
    const elements = document.querySelectorAll(selector);
    if (elements.length) {
        elements.forEach(element => {
            const options = element.dataset.flatpickr ? JSON.parse(element.dataset.flatpickr) : {};
            flatpickr(element, options);
        });
    }
};
