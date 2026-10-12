const burgerOpen = document.querySelector(".header__burger");
const navOpen = document.querySelector(".header__nav");

export const burgerClick = document.addEventListener("click", ({ target }) => {
  if (target.contains(burgerOpen)) {
    if (!target.matches(".header__burger-open")) {
      navOpen.classList.toggle("header__nav--open");
    }
    target.classList.toggle("header__burger--open");
  } else {
    navOpen.classList.remove("header__nav--open");
    burgerOpen.classList.remove("header__burger--open");
  }
});
// export const burgerClick = document.addEventListener("click", ({ target }) => {
//   if (target.contains(burgerOpen)) {
//     if (!target.matches(".header__burger-open")) {
//       navOpen.classList.toggle("header__nav--open");
//     }
//     target.classList.toggle("header__burger--open");
//   } else {
//     navOpen.classList.remove("header__nav--open");
//     burgerOpen.classList.remove("header__burger--open");
//   }
// });
