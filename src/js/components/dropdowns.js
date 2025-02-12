export const dropdowns = () => {
    const dropdowns = document.querySelectorAll(".dropdown");
    if (!dropdowns.length) return;

    dropdowns.forEach(dropdown => {
        const caption = dropdown.querySelector(".caption");
        if (caption) {
            caption.addEventListener("click", () => {
                dropdown.classList.toggle("open");
            });
        }

        const items = dropdown.querySelectorAll(".list .item");
        items.forEach(item => {
            item.addEventListener("click", () => {
                items.forEach(i => i.classList.remove("selected"));
                item.classList.add("selected");
                dropdown.classList.remove("open");

                const captionElement = dropdown.querySelector(".caption");
                if (captionElement) {
                    captionElement.innerHTML = item.innerHTML;
                }
            });
        });
    });

    document.addEventListener("click", (evt) => {
        if (!evt.target.closest(".dropdown")) {
            dropdowns.forEach(dropdown => dropdown.classList.remove("open"));
        }
    });
};
