import { renderCartproducts, handleCartProducts, cartCount } from "./cart.js";
import {
  sumCartQuantity,
  cartArr,
  cartProductKeys,
  clearCart,
} from "./cart-service.js";

const modalReview = document.querySelector('[data-modal-window="review"]');
export const modalCart = document.querySelector(
  '[data-modal-window="cart-modal"]',
);

export const modalClick = () => {
  document.addEventListener("click", ({ target }) => {
    const reviewBtn = target.closest('[data-modal-button="review"]');
    const modalR = modalReview.closest(".modal");

    const cartBtn = target.closest('[data-modal-button="cart-modal"]');
    const modalC = modalCart.closest(".modal");
    const cartLink = target.closest(".modal-cart__link");
    const cartDefault = modalC.querySelector(".modal-cart__default");
    const cartList = modalC.querySelector(".modal-cart__list");
    const cartItem = modalC.querySelector(".modal-cart__item");
    const resetCart = target.closest('.modal-cart__btn[type="reset"]');
    const submitCart = target.closest('.modal-cart__btn[type="submit"]');

    const closeBtn = target.closest("[data-modal-close]");

    if (reviewBtn) {
      modalR.classList.add("modal--open");
      modalReview.classList.add("modal__window--open");
    } else if (closeBtn || !modalReview.contains(target)) {
      modalR.classList.remove("modal--open");
      modalReview.classList.remove("modal__window--open");
    }
    if (cartBtn && Number(sumCartQuantity(cartArr)) === 0) {
      modalC.classList.add("modal--open");
      modalCart.classList.add("modal__window--open");
      cartDefault.classList.add("modal-cart__default--open");
    } else if (cartBtn && Number(sumCartQuantity(cartArr)) > 0) {
      modalC.classList.add("modal--open");
      modalCart.classList.add("modal__window--open");
      cartDefault.classList.remove("modal-cart__default--open");
      handleCartProducts(cartArr, cartItem);
      renderCartproducts(cartArr);
    } else if (resetCart) {
      clearCart(cartArr);
      cartDefault.classList.add("modal-cart__default--open");
      renderCartproducts(cartArr);
      cartList.classList.remove("modal-cart__list--open");
      cartCount.classList.remove("header__action-count--open");
      cartCount.textContent = " ";
    } else if (closeBtn || !modalCart.contains(target) || cartLink || submitCart) {
      modalC.classList.remove("modal--open");
      modalCart.classList.remove("modal__window--open");
    }
  });
};
