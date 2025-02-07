$(document).ready(function () {
    (function () {
        function initSelect2(selectors) {
            selectors.forEach(selector => {
                if ($(selector).length) {
                    $(selector).each(function () {
                        const options = $(this).data("select") || {};
                        $(this).select2(options);
                    });
                }
            });
        }
        function initFlatpickr(selectors) {
            selectors.forEach(selector => {
                if ($(selector).length) {
                    $(selector).each(function () {
                        const options = $(this).data("flatpickr") || {};
                        $(this).flatpickr(options);
                    });
                }
            });
        }
        function initSplide() {
            if($('.splide').length) {
                document.querySelectorAll('.splide, .review-slide').forEach(element => {
                    new Splide(element).mount();
                });
                let splide = new Splide(".hero-splide");
                let heroSection = document.getElementById("hero");
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
            
        }
        function initCountryDropdown() {
            if (!$('#country-code').length) return;

            $.get("https://restcountries.com/v3.1/all", function (data) {
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

                $("#country-code").select2({
                    data: countryData,
                    minimumResultsForSearch: -1,
                    templateResult: formatCountry,
                    templateSelection: formatCountry,
                    escapeMarkup: m => m
                });
            });
        }
        function initDropdowns() {
            if (!$('.dropdown').length) return;

            $('.dropdown').on('click', '.caption', function () {
                $(this).parent().toggleClass('open');
            });

            $('.dropdown').on('click', '.list .item', function () {
                $(this).siblings().removeClass('selected');
                $(this).addClass('selected').closest('.dropdown').removeClass('open').find('.caption').html($(this).html());
            });

            $(document).on('keyup', function (evt) {
                if (evt.key === "Escape") $('.dropdown').removeClass('open');
            });

            $(document).on('click', function (evt) {
                if (!$(evt.target).closest(".dropdown").length) {
                    $('.dropdown').removeClass('open');
                }
            });
        }
        function init() {
            initSelect2([".airport-select", ".filter-select", ".price"]);
            initFlatpickr([".date-input", ".time-input"]);
            initSplide();
            initCountryDropdown();
            initDropdowns();
        }
        init();
    })();
});
