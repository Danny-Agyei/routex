const pageSwipers = document.querySelectorAll(".swiper");
const btnNavOpen = document.querySelector(".js-nav-open");
const btnNavClose = document.querySelector(".js-nav-close");
const accordionTriggers = document.querySelectorAll(".js-accordion-trigger");

// Sticky navbar on scroll
window.addEventListener("scroll", function () {
  const scrolledValue = this.scrollY;
});

// Navbar toggling handler
btnNavOpen.addEventListener("click", () => toggleNavMenu(btnNavOpen));
btnNavClose.addEventListener("click", () => toggleNavMenu(btnNavClose));

function toggleNavMenu() {
  const navMenu = document.querySelector(".js-nav-menu");
  const navOverlay = document.querySelector(".js-nav-overlay");
  const isOpen = navMenu.classList.contains("is-hidden");

  navOverlay.classList.toggle("is-visible", isOpen);
  document.body.classList.toggle("noscroll", isOpen);

  btnNavOpen.ariaExpanded = isOpen ? true : false;
  btnNavClose.ariaExpanded = isOpen ? true : false;

  if (isOpen) {
    navMenu.classList.remove("is-hidden");

    setTimeout(() => navMenu.classList.add("is-visible"), 100);
  } else if (!isOpen) {
    navMenu.classList.remove("is-visible");

    setTimeout(() => navMenu.classList.add("is-hidden"), 300);
  }
}

// Accordion Trigger handler
Array.from(accordionTriggers).forEach((btn) => {
  btn.addEventListener("click", toggleAccordion.bind(btn));
});

function toggleAccordion() {
  const panels = document.querySelectorAll(".js-accordion-panel");
  const panelToExpand = document.getElementById(
    this.getAttribute("aria-controls")
  );

  accordionTriggers.forEach((btn) => btn.setAttribute("aria-expanded", false));
  this.ariaExpanded = true;

  panels.forEach((panel) => panel.classList.remove("has-expanded"));
  panelToExpand.classList.add("has-expanded");
}

// Countries and Testimonials Swiper handler
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
        550: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 6,
          freeMode: true,
          speed: 1000,
          centeredSlides: false,
        },
      },
    },
  };

  const swiperOption = options[swiperName];

  const swiper = new Swiper(className, {
    observer: true,
    observeParents: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    createElements: true,
    ...swiperOption,
  });
}
