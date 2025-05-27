const swiperHero = document.querySelector(".swiper-hero");

if (swiperHero) {
  const swiperHero = new Swiper(".swiper-hero", {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-btn-hero-next",
      prevEl: ".swiper-btn-hero-prev",
    },
  });
}

const sliderPrice = document.getElementById("slider-price");

if (sliderPrice) {
  noUiSlider.create(sliderPrice, {
    start: [0, 129000],
    connect: true,

    tooltips: [
      true,
      {
        to: function (value) {
          return Math.round(value) + "Р";
        },
      },
    ],
    format: {
      to: (value) => Math.round(value) + "Р",
      from: (value) => Number(value),
    },
    step: 1000,
    range: {
      min: 1000,
      max: 200000,
    },
  });
}

const swiperCatalog = document.querySelector(".swiper-catalog");

if (swiperCatalog) {
  const swiperCatalog = new Swiper(".swiper-catalog", {
    spaceBetween: 10,
    slidesPerView: 1,
    enabled: true,

    breakpoints: {
      // when window width is >= 640px
      640: {
        enabled: false,
        spaceBetween: 0,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-catalog",
      prevEl: ".swiper-button-prev-catalog",
    },
  });
}

const swiperPopular = document.querySelector(".swiper-popular");

if (swiperPopular) {
  const swiperPopular = new Swiper(".swiper-popular", {
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
      // when window width is >= 640px
      576: {
        spaceBetween: 30,
        slidesPerView: 2,
      },

      992: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-popular",
      prevEl: ".swiper-button-prev-popular",
    },
  });
}

const swiperReviews = document.querySelector(".swiper-reviews");

if (swiperReviews) {
  const swiperReviews = new Swiper(".swiper-reviews", {
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
      // when window width is >= 640px

      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-reviews",
      prevEl: ".swiper-button-prev-reviews",
    },
  });
}

const swiperState = document.querySelector(".swiper-state");

if (swiperState) {
  const swiperState = new Swiper(".swiper-state", {
    spaceBetween: 10,
    slidesPerView: 1,

    breakpoints: {
      // when window width is >= 640px

      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next-state",
      prevEl: ".swiper-button-prev-state",
    },
  });
}

// Инициализация табов
document.querySelectorAll(".nav-link").forEach((tab) => {
  tab.addEventListener("click", function (e) {
    // Убираем активный класс со всех табов
    document.querySelectorAll(".nav-link").forEach((t) => {
      t.classList.remove("active");
    });

    // Добавляем активный класс нажатому табу
    this.classList.add("active");

    // Получаем ID панели содержимого
    const paneId = this.getAttribute("data-bs-target");

    // Убираем активный класс со всех панелей
    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.remove("show", "active");
    });

    // Добавляем активный класс нужной панели
    document.querySelector(paneId).classList.add("show", "active");
  });
});

const likes = document.querySelectorAll(".catalog-item-like");

if (likes) {
  likes.forEach(function (event) {
    event.addEventListener("click", () => {
      event.classList.toggle("like");
    });
  });
}

const burger = document.getElementById("burger");
const burgerClose = document.getElementById("burgerClose");
const menuMobile = document.getElementById("menu-mobile");

if (burger) {
  burger.addEventListener("click", function () {
    menuMobile.classList.add("open");
  });

  burgerClose.addEventListener("click", function () {
    menuMobile.classList.remove("open");
  });
}
