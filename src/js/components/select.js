export const select = (selectors) => {
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            new SlimSelect({
                select: element,
                settings: {
                    showSearch: false 
                }
            });
        });
    });
};