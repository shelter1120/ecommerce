import React from 'react'
import classes from '../Header/Header.module.css'

const Header = () => {
  return (
    <>
      <header className={classes.Header}>
        <p className={classes.Item}>Home</p>
    <p className={classes.Item}>Store</p>
        <p className={classes.Item}>Contact</p>
        <button className={classes.Button}>Add to Cart</button>
      </header>
      <div>
        <h1>The Generics</h1>
      </div>
    </>
  )
}

export default Header
