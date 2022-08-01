import { Swiper, Navigation, Pagination, EffectFade, Autoplay, Lazy } from "swiper";
Swiper.use([Navigation, Pagination, EffectFade, Autoplay, Lazy]);

// Header carousel
const carousel = new Swiper(".carousel", {
    direction: "horizontal",
    loop: true,
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true
    },
    effect: "fade",
    speed: 400,
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
        delay: 7000,
    },
});

// Events slider 
const eSlider = new Swiper(".events__slider", {
    direction: "horizontal",
    loop: true,
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true
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

// Testimonials slider 
const tSlider = new Swiper(".testimonials__slider", {
    direction: "horizontal",
    loop: true,
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
        loadOnTransitionStart: true
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