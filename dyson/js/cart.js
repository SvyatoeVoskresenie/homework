export default class CartManager {
  constructor({
    productSelector = ".special-offers__card",
    addButtonSelector = ".special-offers__card-bt",
    countSelector = ".counter__value",
    plusButtonSelector = ".counter__plus",
    minusButtonSelector = ".counter__minus",
    minCount = 1,
    maxCount = 99,
  } = {}) {
    this.productSelector = productSelector;
    this.addButtonSelector = addButtonSelector;
    this.countSelector = countSelector;
    this.plusButtonSelector = plusButtonSelector;
    this.minusButtonSelector = minusButtonSelector;
    this.minCount = minCount;
    this.maxCount = maxCount;

    this.cart = [];

    this.init();
  }

  init() {
    this.bindAddButtons();

    this.bindCounterButtons();

    this.loadCart();

    console.log('CartManager инициализирован');
  }

  bindCounterButtons() {
    document.addEventListener('click', (e) => {
      const plusButton = e.target.closest(this.plusButtonSelector);
      const minusButton = e.target.closest(this.minusButtonSelector);

      if (!plusButton && !minusButton) return;

      const card = (plusButton || minusButton).closest(this.productSelector);
      if (!card) return;

      const counterEl = card.querySelector(this.countSelector);
      if (!counterEl) return;

      let value = parseInt(counterEl.textContent, 10) || this.minCount;

      if (plusButton) {
        value = Math.min(value + 1, this.maxCount);
      } else if (minusButton) {
        value = Math.max(value - 1, this.minCount);
      }

      counterEl.textContent = value;
    });
  }

  getProductData(card) {
    const img = card.querySelector(".special-offers__card-img");
    const title = card.querySelector(".special-offers__card-definition");
    const price = card.querySelector(".special-offers__card-middle-price");
    const counter = card.querySelector(this.countSelector);

    const count = counter ? parseInt(counter.textContent, 10) || 1 : 1;

    console.log('📦 Товар:', {
      title: title ? title.textContent : "Товар",
      price: price ? price.textContent : "0Р",
      count: count
    });

    return {
      id: Date.now() + Math.random().toString(36).substr(2, 9),
      img: img ? img.src : "",
      title: title ? title.textContent : "Товар",
      price: price ? price.textContent : "0Р",
      count: count,
    };
  }

  addToCart(product) {
    const existingProduct = this.cart.find(
      (item) => item.title === product.title && item.price === product.price
    );

    if (existingProduct) {
      existingProduct.count += product.count;
      console.log(`Обновлён товар: ${product.title}, количество: ${existingProduct.count}`);
    } else {
      this.cart.push({ ...product });
      console.log(`Добавлен товар: ${product.title}, количество: ${product.count}`);
    }

    localStorage.setItem("cart", JSON.stringify(this.cart));
  }

  loadCart() {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart);
        console.log(`Загружена корзина: ${this.cart.length} товаров`);
      } catch (e) {
        console.error("Ошибка загрузки корзины:", e);
      }
    }
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem("cart");
    console.log('Корзина очищена');
  }

  getCart() {
    return this.cart;
  }

  getTotalCount() {
    return this.cart.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => {
      const price = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
      return sum + price * item.count;
    }, 0);
  }
}