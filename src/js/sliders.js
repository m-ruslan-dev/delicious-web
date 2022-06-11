import { Swiper, Navigation, Pagination, EffectFade, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade, Autoplay]);

// Header carousel
const carousel = new Swiper(".carousel", {
    direction: "horizontal",
    loop: true,
    effect: "fade", 
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

// Events slider 
const eSlider = new Swiper(".events__slider", {
    direction: "horizontal",
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});

// Testimonials slider 
const tSlider = new Swiper(".testimonials__slider", {
    direction: "horizontal",
    loop: true,
        pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
});