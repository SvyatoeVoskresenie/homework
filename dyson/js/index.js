import HeaderFixed from "./header.js";
import { burgerClick } from "./burger.js";
import { modalClick } from "./modal.js";
import { specialOffersSlider } from "./specialOffers.js";
import { clickCounter} from "./counter.js";
import {  createProductInCart} from "./cart.js"; // для отладки дом, удалить потом, импорт внизу - восстановить
import { addToCart, cartArr, errCartProductNotFound, clearCart, sumCartQuantity} from "./cart-service.js";
import { faqClick } from "./faq.js"; 

specialOffersSlider();
clickCounter()
modalClick()
createProductInCart()
faqClick()
