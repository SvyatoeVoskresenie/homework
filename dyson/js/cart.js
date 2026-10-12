// DOM for cart counter
import { swiperWrapper } from "./counter.js";
import {
  addToCart,
  cartArr,
  sumCartQuantity,
  cartProductKeys,
} from "./cart-service.js";

export const cartCount = document.querySelector(".header__action-count");

export const createProductInCart = () => {
  swiperWrapper.addEventListener("click", ({ target }) => {
    const card = target.closest(".special-offers__card");
    if (!card) return;

    const btnToCart = target.closest(".special-offers__card-bt");
    const productValue = card.querySelector(".counter__value").textContent;
    const productName = card
      .querySelector(".special-offers__card-definition")
      .textContent.trim();
    if (btnToCart) {
      addToCart(cartArr, productName, Number(productValue));
    }
    if (btnToCart && Number(sumCartQuantity(cartArr)) > 0) {
      cartCount.classList.add("header__action-count--open");
      cartCount.textContent = `${sumCartQuantity(cartArr)}`;
    } else if (btnToCart && Number(sumCartQuantity(cartArr)) === 0) {
      cartCount.classList.remove("header__action-count--open");
    }
  });
};

// DOM for cart modal
const cartListEl = document.querySelector(".modal-cart__list");

const createCartItem = cartItem => {
  const cartItemEl = document.createElement("li");
  cartItemEl.classList.add("modal-cart__item");
  cartItemEl.dataset.id = cartItem[cartProductKeys.id];
  if (Number(cartItem[cartProductKeys.quantity] === 0)) return;
  cartItemEl.innerHTML = `
  <p class="modal-cart__item-name modal-text">${[cartItem[cartProductKeys.name]]}</p>
  <p class="modal-cart__item-quantity modal-text">${[cartItem[cartProductKeys.quantity]]}</p>
  `;
  return cartItemEl;
};

export const renderCartproducts = cartArr => {
  cartListEl.classList.add("modal-cart__list--open");
  cartListEl.innerHTML = "";
  cartArr.forEach(cartItem => {
    const cartItemEl = createCartItem(cartItem);
    if (cartItem) cartListEl.append(cartItemEl);
  });
};

export const handleCartProducts = cartItem => {
  const cartItemEl = createCartItem(cartItem);
  cartListEl.append(cartItemEl);
};

