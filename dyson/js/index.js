import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { specialOffersSlider } from "./specialOffers.js";
import Counter from "./counter.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_NAV: "header__nav",
      HEADER_NAV_OPEN: "header__nav--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      HEADER_NAV_LINK: "header__nav-link",
      BREAKPOINT: 768,
      MAIN: "main",
    },
    headerFixed,
  );

  new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  });

  specialOffersSlider();
  new Counter();
} catch (error) {
  console.error(error);
}
