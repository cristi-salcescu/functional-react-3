const initialMap = new Map();

function addProductToMap(map, product){
  const newMap = new Map(map);
  const quantity = getProductQuantity(map, product) + 1; 
  newMap.set(product.id, { ...product, quantity });
  return newMap;
}

function getProductQuantity(map, product) {
  const existingProduct = map.get(product.id);
  return (existingProduct) ? existingProduct.quantity : 0;
}

function removeProductFromMap(map, product){
  const newMap = new Map(map);
  newMap.delete(product.id);
  return newMap;
}

function toCartView(map) {
  const list = Array.from(map.values());
  return Object.freeze({
    list,
    total: list.reduce(addPrice, 0)
  });
}

function addPrice(totalPrice, line) {
  return totalPrice + line.price * line.quantity;
}

export { 
  initialMap, 
  addProductToMap,
  removeProductFromMap,
  toCartView 
};