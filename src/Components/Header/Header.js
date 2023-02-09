import React from 'react'
import classes from '../Header/Header.module.css'
import {NavLink} from "react-router-dom"
import "../Products/Products.css"
const Header = () => {
  return (
    <>
      <header className={classes.Header}>
        <NavLink to="/home">Home</NavLink>
        {/* <p className={classes.Item}>Home</p> */}
        <div>
          <ul>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
    <p className={classes.Item}>Store</p>
        <p className={classes.Item}>Contact</p>
      </header>
      <div>
        <h1 className="head">The Generics</h1>
      </div>
    </>
  )
}

export default Header
