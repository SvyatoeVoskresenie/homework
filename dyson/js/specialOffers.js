

export const specialOffersSlider = () => {
  const init = () => {
    const el = document.querySelector(".special-offers__slider");
    if (!el) {
      console.error("Слайдер не найден в DOM!");
      return;
    }

    const swiper = new Swiper(el, {
      slidesPerView: 3,
      spaceBetween: 20,
      grid: {
        rows: 2,
        fill: "row",
      },
      loop: false,
      centeredSlides: false, // Отключаем центрирование
      centerInsufficientSlides: false,
      watchSlidesProgress: true,
      
      navigation: {
        prevEl: ".special-offers__slider-button--prev",
        nextEl: ".special-offers__slider-button--next",
      },
      pagination: {
        el: ".special-offers__pagination",
        type: "fraction",
        renderFraction: (currentClass, totalClass) =>
          `<span class="${currentClass}"></span> из <span class="${totalClass}"></span>`,
      },
      breakpoints: {
        996: {
          slidesPerView: 3,
          grid: { rows: 2, fill: "row" },
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3, 
          grid: { rows: 2, fill: "row" },
          spaceBetween: 20,
        },
        656: {
          autoHeight: false,
          slidesPerView: 3,
          initialSlide: 0,
          grid: { rows: 2, fill: "row" },
          spaceBetween: 20,
        },
        0: {
          slidesPerView: 2,
          grid: { rows: 2, fill: "row" },
          spaceBetween: 10,
        },
      },
      on: {
        init() { updateButtonsState(this); },
        slideChange() { updateButtonsState(this); },
        resize() { updateButtonsState(this); },
      },
    });

    function updateButtonsState(swiperInstance) {
      const prevBtn = document.querySelector(".special-offers__slider-button--prev");
      const nextBtn = document.querySelector(".special-offers__slider-button--next");
      if (!prevBtn || !nextBtn) return;
      prevBtn.classList.toggle("swiper-button-disabled", swiperInstance.isBeginning);
      nextBtn.classList.toggle("swiper-button-disabled", swiperInstance.isEnd);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
};