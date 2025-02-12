export const countryNum = () => {
    const countryCodeElement = document.getElementById("country-code");
    if (!countryCodeElement) return;

    fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => {
            let countryData = data
                .filter(country => country.idd?.root)
                .map(country => {
                    const dialCode = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "");
                    return {
                        id: dialCode,
                        text: `${dialCode}`,
                        flag: country.flags.png
                    };
                });

            function formatCountry(country) {
                if (!country.id) return country.text;
                return `<div class="flex gap-[20px] items-center">
                            <img src="${country.flag}" style="width: 21px; height:15px;">
                            <span>${country.text}</span>
                        </div>`;
            }

            if (window.Select2) {
                new Select2(countryCodeElement, {
                    data: countryData,
                    minimumResultsForSearch: -1,
                    templateResult: formatCountry,
                    templateSelection: formatCountry,
                    escapeMarkup: m => m
                });
            }
        })
        .catch(error => console.error("Error fetching country data:", error));
};
