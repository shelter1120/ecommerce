import React from 'react';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    album :'Albums1'
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    album :'Albums2'

  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    album :'Albums3'

  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    album :'Albums4'

  },
];

const App = () => {
  return (
    <div className='container'>
      <div>
      <Header />
      <div className="col- 1 
      col-md-4">
      {products.map((product, index) => (
      <Products key={index} album={product.album} title={product.title} price={product.price} imageUrl={product.imageUrl} />
      ))}
      </div>
      </div>
    </div>
  );
};

export default App;
