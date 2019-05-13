var swiper = new Swiper('.swiper-container', {
  speed: 1200,
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
  loop: true,

  // Responsive breakpoints
  breakpointsInverse: true,
  breakpoints: {
    420: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    767: {
      slidesPerView: 3,
      spaceBetween: 0
    }
  }
});
