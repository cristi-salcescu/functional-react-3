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

function isInQuery(query){
  return function(product){
    return product.name.includes(query.text); 
  };
}

function App() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState({text: ''});
  const [shoppingMap, setShoppingMap] = useState(initialMap);

  function filterProducts(query){
    setQuery(query)
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

  const filteredProducts = products.filter(isInQuery(query));

  return (
    <div>
      <Header />
      <div className="content">
      <div>
          <ProductSearch 
            onSearch={filterProducts} />
          <ProductList 
            products={filteredProducts} 
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