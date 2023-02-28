import React, { useEffect, useState } from 'react';

import Header from './Header';
import ProductSearch from './ProductSearch';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import { fetchProducts } from './api/productsAPI';
import { 
  initialMap, 
  addProductToMap, 
  removeProductFromMap, 
  toCartView 
} from './cart';

import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [shoppingMap, setShoppingMap] = useState(initialMap);

  function filterProducts(query){
    console.log(query);
  }

  function addToCart(product) {
    setShoppingMap(map => addProductToMap(map, product));
  }

  function removeFromCart(product) {
    setShoppingMap(map => removeProductFromMap(map, product));
  }

  useEffect(()=>{
    fetchProducts().then(setProducts);
  }, [])

  return (
    <div>
      <Header />
      <div className="content">
      <div>
          <ProductSearch 
            onSearch={filterProducts} />
          <ProductList 
            products={products} 
            onAddClick={addToCart} />
        </div>

        <ShoppingCart 
          cart={toCartView(shoppingMap)}
          onRemoveClick={removeFromCart} />
      </div>
    </div>
  );
}

export default App;
