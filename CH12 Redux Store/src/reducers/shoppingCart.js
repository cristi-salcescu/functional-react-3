function addToCart(map, product){
  const newMap = new Map(map);
  const quantity = getProductQuantity(map, product) + 1; 
  newMap.set(product.id, { ...product, quantity });
  return newMap;
}

function getProductQuantity(map, product) {
  const existingProduct = map.get(product.id);
  return (existingProduct) ? existingProduct.quantity : 0;
}
  
function removeFromCart(map, product){
  const newMap = new Map(map);
  newMap.delete(product.id);
  return newMap;
}
  
export default function (shoppingMap = new Map(), action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return addToCart(shoppingMap, action.product);
        case 'REMOVE_FROM_CART':
            return removeFromCart(shoppingMap, action.product);
        default:
            return shoppingMap;
    }
}
