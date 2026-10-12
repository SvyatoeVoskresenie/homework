export const swiperWrapper = document.querySelector(".swiper-wrapper");

export const clickCounter = () => {
  swiperWrapper.addEventListener("click", ({ target }) => {
    const card = target.closest(".special-offers__card");
    if (!card) return;
    const btnPlusClicked = target.closest(".counter__button--plus");
    const btnMinusClicked = target.closest(".counter__button--minus");
    const btnMinus = card.querySelector(".counter__button--minus");
    let value = card.querySelector(".counter__value");
    if (btnPlusClicked && Number(value.textContent) < 99) {
      value.textContent = `${Number(value.textContent) + 1}`;
    } else if (btnMinusClicked && Number(value.textContent) > 0) {
      value.textContent = `${Number(value.textContent) - 1}`;
    }
    if (btnMinus) {
      btnMinus.classList.toggle(
        "counter__button--disabled",
        Number(value.textContent) === 0,
      );
    }
    const btnPlus = card.querySelector(".counter__button--plus");
    if (btnPlus) {
      btnPlus.classList.toggle(
        "counter__button--disabled",
        Number(value.textContent) === 99,
      );
    }
  });
};
