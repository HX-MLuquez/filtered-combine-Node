import React from 'react';
import Product from './Product';
import './ProductList.css'

function ProductList({ products }) {
  return (
    <div className="ProductList">
      <div className="productContainer">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;