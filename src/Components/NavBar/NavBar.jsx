import React, { useState } from 'react'
import CartModal from '../CartModal/CartModal'
import './NavBar.css'

const NavBar = ({ cartList, setCartList, cartvalue }) => {
  let logoURL = 'https://www.svgrepo.com/show/94662/shopping-cart.svg'
  const [isModalOpened, setIsModalOpened] = useState(false)

  const cartModalHandler = () => {
    setIsModalOpened(!isModalOpened)
  }
  return (
    <nav>
      <div>
        <img
          style={{ display: 'block' }}
          className="logo"
          src={logoURL}
          alt="logo"
        />
        <span className="logo-span">E-Commerce Redefined</span>
      </div>
      <h1 className="nav-h1">JX4 Retail</h1>
      <p className="nav-p" onClick={cartModalHandler}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#000000"
        >
          <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" />
        </svg>
        <span className="cart-p">{cartvalue}</span>
      </p>
      {isModalOpened ? (
        <CartModal
          setIsModalOpened={setIsModalOpened}
          cartList={cartList}
          setCartList={setCartList}
        />
      ) : (
        ''
      )}
    </nav>
  )
}

export default NavBar
