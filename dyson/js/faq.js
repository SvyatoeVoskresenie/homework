const faq = document.querySelector(".faq");

export const faqClick = () => {
  faq.addEventListener("click", event => {
    const faqSummary = event.target.closest(".faq__question");
    const faqDetails = event.target.closest(".faq__item");
    if (!faqSummary) return;
    event.preventDefault();
    const faqAnswer = faqSummary.nextElementSibling;
    if (faqDetails.open === false) {
      faqAnswer.style.maxHeight = "0px";
      faqDetails.setAttribute("open", "");
      requestAnimationFrame(() => {
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      });
    } else if (faqDetails.open === true) {
      faqDetails.classList.add("faq__item--closing");
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
      requestAnimationFrame(() => {
        faqAnswer.style.maxHeight = "0px";
      });
    }
  });
};
faq.addEventListener("transitionend", event => {
  const faqDetails = event.target.closest(".faq__item");
  if (event.propertyName !== "max-height") return;
  if (faqDetails.matches(".faq__item--closing")) {
    faqDetails.classList.remove("faq__item--closing");
    faqDetails.removeAttribute("open");
  } else if (
    faqDetails.open === true &&
    !faqDetails.matches(".faq__item--closing")
  ) {
    event.target.style.maxHeight = "";
  } 
});
