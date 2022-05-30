import React, { useState } from "react";
import Products from './components/Products';
import prodData from '../db.json'
const App = () => {

  const [product, setProduct] = useState(prodData)
  return <div>
    {/* TODO: Code here */}
    {product.map((prod) => {
          <Products>{prod}</Products>
    })}
    </div>;
};

export default App;
