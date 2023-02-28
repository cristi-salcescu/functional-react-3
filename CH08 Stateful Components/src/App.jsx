import React, { useState } from 'react';

import Header from './Header';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { 
  initialMap, 
  addProductToMap, 
  removeProductFromMap, 
  toCartView 
} from './cart';

import './App.css';

function App({products}) {
  const [shoppingMap, setShoppingMap] = useState(initialMap);

  function addToCart(product) {
    setShoppingMap(map => addProductToMap(map, product));
  }

  function removeFromCart(product) {
    setShoppingMap(map => removeProductFromMap(map, product));
  }

  return (
    <div>
      <Header />
      <div className="content">
        <ProductList 
          products={products} 
          onAddClick={addToCart} />

        <ShoppingCart 
          cart={toCartView(shoppingMap)}
          onRemoveClick={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
