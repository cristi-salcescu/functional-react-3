import { handleActions } from 'redux-actions';
import actions from '../actions/ShoppingCartActions';

function addToCart(map, action){
    const product = action.payload;
    const newMap = new Map(map);
    const quantity = getProductQuantity(map, product) + 1; 
    newMap.set(product.id, { ...product, quantity });
    return newMap;
}

function getProductQuantity(map, product) {
    const existingProduct = map.get(product.id);
    return (existingProduct) ? existingProduct.quantity : 0;
}
  
function removeFromCart(map, action){
    const product = action.payload;
    const newMap = new Map(map);
    newMap.delete(product.id);
    return newMap;
}
  
export default handleActions({ 
        [actions.addToCart]: addToCart,
        [actions.removeFromCart]: removeFromCart 
    },
    new Map()
);








