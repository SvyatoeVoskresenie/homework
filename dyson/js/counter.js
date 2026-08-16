export default class Counter {
  constructor({
    counterSelector = ".counter",
    valueSelector = "[data-counter-value]",
    minusSelector = ".counter__button--minus",
    plusSelector = ".counter__button--plus",
    disabledClass = "counter__button--disabled",
    min = 1,
    max = 99,
  } = {}) {
    this.valueSelector = valueSelector;
    this.minusSelector = minusSelector;
    this.plusSelector = plusSelector;
    this.disabledClass = disabledClass;
    this.min = min;
    this.max = max;

    this.counters = document.querySelectorAll(counterSelector);
    this.init();
  }

  init() {
    this.counters.forEach((counter) => this.bindCounter(counter));
  }

  bindCounter(counter) {
    const minusBtn = counter.querySelector(this.minusSelector);
    const plusBtn = counter.querySelector(this.plusSelector);
    const valueEl = counter.querySelector(this.valueSelector);

    if (!minusBtn || !plusBtn || !valueEl) return;

    this.updateMinusState(minusBtn, this.getValue(valueEl));

    plusBtn.addEventListener("click", () => {
      const value = this.getValue(valueEl);
      if (value >= this.max) return;

      const newValue = value + 1;
      this.setValue(valueEl, newValue);
      this.updateMinusState(minusBtn, newValue);
    });

    minusBtn.addEventListener("click", () => {
      const value = this.getValue(valueEl);
      if (value <= this.min) return;

      const newValue = value - 1;
      this.setValue(valueEl, newValue);
      this.updateMinusState(minusBtn, newValue);
    });
  }

  getValue(valueEl) {
    return parseInt(valueEl.textContent, 10) || 0;
  }

  setValue(valueEl, value) {
    valueEl.textContent = value;
  }

  updateMinusState(minusBtn, value) {
    minusBtn.classList.toggle(this.disabledClass, value <= this.min);
  }
}
