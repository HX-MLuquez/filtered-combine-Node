import React from 'react';
import './Product.css'

function Product({ product }) {
  return (
    <div className="Product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Stock: {product.stock}</p>
      <p>Category: {product.category}</p>
      <p>Condition: {product.condition}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}

export default Product;