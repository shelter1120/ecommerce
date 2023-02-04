import React from 'react';
import '../Products/Products.css'

const Products = ({ title, price, imageUrl,album }) => {
  return (
    <div>
    <div className='product'>
        <h2>{album}</h2>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button>Add to cart</button>
    </div>
    </div>
  );
};

export default Products;
