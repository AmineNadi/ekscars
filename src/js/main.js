// import '../css/main.css';

import { select } from './components/select';
import { flatPickr } from './components/calendar';
import { splideJs } from './components/sliders';
import Alpine from 'alpinejs';
 

document.addEventListener("DOMContentLoaded", function () {
    function init() {
        select(".slim-select");
        flatPickr(".flatpicker-item");
        splideJs();
        window.Alpine = Alpine;
        Alpine.start();
    }
    init();
});
