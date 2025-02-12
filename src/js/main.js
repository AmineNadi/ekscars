// import '../css/main.css';

import { select } from './components/select';
import { flatPickr } from './components/calendar';
import { splideJs } from './components/sliders';
import { countryNum } from './components/country';
import { dropdowns } from './components/dropdowns';

document.addEventListener("DOMContentLoaded", function () {
    function init() {
        select([".airport-select", ".filter-select", ".price"]);
        flatPickr([".date-input", ".time-input"]);
        splideJs();
        countryNum();
        dropdowns();
    }
    init();
});
