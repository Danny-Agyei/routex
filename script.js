const swiper = new Swiper(".swiper", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  speed: 1000,
  createElements: true,
  pagination: false,
  autoResize: true,
  autoplay: false,
  grabCursor: true,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpointsInverse: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: "auto",
    },
    500: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    960: {
      slidesPerView: 5,
    },
  },
});
