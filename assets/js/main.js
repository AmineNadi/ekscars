
;
$(document).ready(function () {
    if ($('.airport-select').length) {
        let moroccanAirports = [
            { id: "CMN", text: "Mohammed V International Airport (Casablanca)" },
            { id: "RAK", text: "Marrakech Menara Airport" },
            { id: "AGA", text: "Agadir Al Massira Airport" },
        ];
        $('.airport-select').select2({
            data: moroccanAirports,
            minimumResultsForSearch: -1,
            placeholder: "Select Airport",
        });
        $('.airport-select').next('.select2').find('.select2-selection').each(function () {
            $(this).prepend(`
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_4147)">
                        <path d="M15.75 12V10.5L9.75 6.75V2.625C9.75 2.0025 9.2475 1.5 8.625 1.5C8.0025 1.5 7.5 2.0025 7.5 2.625V6.75L1.5 10.5V12L7.5 10.125V14.25L6 15.375V16.5L8.625 15.75L11.25 16.5V15.375L9.75 14.25V10.125L15.75 12Z" fill="#FF5F01"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1_4147">
                            <rect width="18" height="18" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            `);
        });
    }
    
    if ($('.filter-select').length) {
        $('.filter-select').select2({
            minimumResultsForSearch: -1,
            placeholder: function() {
                return $(this).find('option[selected]').text(); // Set the first option as the placeholder
            },
            allowClear: false
        });
    }
    if ($('.price').length) {
        $('.price').select2({
            minimumResultsForSearch: -1,
            allowClear: false
        });
        $('#select2-price-container').each(function() {
            let text = $(this).text();
            
            let updatedText = text.replace('€', '<span class="text-primary">€</span>');
            
            // Update the HTML of the container
            $(this).html(updatedText);
          });
    }
   
    
    if ($('.date-input').length) {
        $(".date-input").flatpickr({
            dateFormat: "d/m/Y",
            defaultDate: new Date()
        });
    }
    
    if ($('.time-input').length) {
        $(".time-input").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "h:i K",
            defaultDate: new Date()
        });
    }
    
    if ($('.splide').length) {
        var splide = new Splide( '.splide', {
            type: 'loop',
            autoplay: true,
        } );
        splide.mount();
    }
    
    if ($('.review-slide').length) {
    var reviewSlide = new Splide( '.review-slide', {
        type   : 'loop',
        perPage:3,
        focus:'center',
        perMove:1,
        padding: '180px',
        gap    : 18,
        pagination:false,
        breakpoints: {
            767: {
                padding: '80px',
            },
            991: {
                perPage: 1,
                padding: '120px',
            },
            1120: {
                perPage: 2,
            }
      }
      } );
      
      reviewSlide.mount();
    }
    if ($('#country-code').length) {
        $.get("https://restcountries.com/v3.1/all", function (data) {
            let countryData = [];
            data.forEach(country => {
                if (country.idd?.root) {
                    const dialCode = country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : "");
                    const flag = country.flags.png;
                    countryData.push({ id: dialCode, text: `${dialCode}`, flag: flag });
                }
            });
    
            function formatCountry(country) {
                if (!country.id) return country.text;
                return `<div class="flex gap-[20px] items-center"><img src="${country.flag}" style="width: 21px; height:15px;"> <span>${country.text}</span></div>`;
            }
    
            $("#country-code").select2({
                data: countryData,
                minimumResultsForSearch: -1,
                templateResult: formatCountry,
                templateSelection: formatCountry,
                escapeMarkup: function (m) { return m; }
            });
        });
    }
    if ($('.dropdown').length) {
        $('.dropdown > .caption').on('click', function() {
            $(this).parent().toggleClass('open');
        });
    
        
    
        $('.dropdown > .list > .item').on('click', function() {
            $('.dropdown > .list > .item').removeClass('selected');
            $(this).addClass('selected').parent().parent().removeClass('open').children('.caption').html($(this).html());
        });
    
        $(document).on('keyup', function(evt) {
            if ((evt.keyCode || evt.which) === 27) {
                $('.dropdown').removeClass('open');
            }
        });
    
        $(document).on('click', function(evt) {
            if ($(evt.target).closest(".dropdown > .caption").length === 0) {
                $('.dropdown').removeClass('open');
            }
        });
    }
    
});