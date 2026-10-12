export const cartArr = [];
export const cartProductKeys = {
  id: "id",
  name: "name",
  quantity: "quantity",
};
export const errCartProductNotFound = cartProductId =>
  `Product with id ${cartProductId} not found`;
export const getNewCartProductId = cartArr =>
  cartArr.reduce(
    (maxId, cartProduct) => Math.max(maxId, cartProduct[cartProductKeys.id]),
    0,
  ) + 1;
export const addToCart = (cartArr, name, quantity) => {
  const newCartProduct = {
    [cartProductKeys.id]: getNewCartProductId(cartArr),
    [cartProductKeys.name]: name,
    [cartProductKeys.quantity]: quantity,
  };
  const existingProduct = cartArr.find(item => item[cartProductKeys.name] === name)
  console.log(existingProduct)
  if (Number(quantity) === 0) return;
  if (existingProduct) {
    existingProduct[cartProductKeys.quantity] += quantity
  } else {
    cartArr.push(newCartProduct);
  }
  return newCartProduct;
};
export const clearCart = cartArr => {
  cartArr.length = 0;
  return cartArr;
};
export const sumCartQuantity = cartArr => {
  let sumCart = 0;
  for (let i = 0; i < cartArr.length; i++) {
    sumCart += cartArr[i][cartProductKeys.quantity];
  }
  return sumCart;
};
