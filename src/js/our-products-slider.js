let ourProductsSlider = new Swiper('.section-our-products .swiper-container', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination-our-products',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  autoplay: {
    delay: 1500,
  },
});
