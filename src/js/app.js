import AOS from 'aos';
import { tns } from 'tiny-slider';
import * as functions from "./modules/functions.js";

AOS.init();

tns({
    container: '#reviews_slider',
    items: 1,
    loop: false,
    swipeAngle: false,
    speed: 400,
    nav: false,
    gutter: 0,
    mouseDrag: true,
    responsive: {
        576: {
            items: 2
        },
        768: {
            items: 3
        }
    }
});

functions.isWebp();