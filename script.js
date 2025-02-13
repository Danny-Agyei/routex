const pageSwipers = document.querySelectorAll(".swiper");
const btnNavToggle = document.querySelectorAll(".js-nav-toggle");

Array.from(pageSwipers).forEach((swiper) => {
  const swiperName = swiper.getAttribute("data-name");
  let className;

  if (swiperName === "testimonials") {
    className = ".testimonials__swiper";
  } else if (swiperName === "countries") {
    className = ".countries__swiper";
  }

  initializeSwiper(className, swiperName);
});

function initializeSwiper(className, swiperName) {
  const options = {
    testimonials: {
      autoplay: true,
      grabCursor: false,
      speed: 1200,
      spaceBetween: 30,
      navigation: {
        nextEl: ".testimonials__btn--next",
        prevEl: ".testimonials__btn--prev",
      },
    },
    countries: {
      pagination: false,
      autoResize: true,
      autoplay: false,
      speed: 1000,
      grabCursor: true,
      spaceBetween: 30,
      navigation: {
        nextEl: ".countries__btn--next",
        prevEl: ".countries__btn--prev",
      },
      // Responsive breakpoints
      breakpointsInverse: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: "auto",
        },
        // 500: {
        //   slidesPerView: 1,
        // },
        768: {
          slidesPerView: 4,
        },
        960: {
          slidesPerView: 5,
        },
      },
    },
  };

  const swiperOption = options[swiperName];

  const swiper = new Swiper(className, {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    createElements: true,
    ...swiperOption,
  });
}

// Navbar

Array.from(btnNavToggle).forEach((btn) => {
  const type = btn.getAttribute("data-toggle-type");

  const isOpen = type === "open";

  btn.addEventListener("click", (e) => toggleNavMenu(isOpen));
});

function toggleNavMenu(isOpen) {
  const navWrapper = document.querySelector(".js-nav-wrapper");
  const navOverlay = document.querySelector(".js-nav-overlay");

  navOverlay.classList.toggle("is-visible", isOpen);
  navWrapper.classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("noscroll", isOpen);
}
