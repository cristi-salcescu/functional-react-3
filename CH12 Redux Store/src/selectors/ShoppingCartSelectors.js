function toCartView({shoppingCart}) {
  const list = Array.from(shoppingCart.values());
  return Object.freeze({
      list,
      total: list.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

export { toCartView };