import React, { useEffect } from 'react'
import './Card.css'

const Card = ({ products, setCartValue, setCartList, cartList }) => {
  useEffect(() => {
    setCartValue(() => cartList.length)
  }, [cartList])

  const addButtonHandler = (e, id) => {
    cartList.filter((c) => c.id == id).length === 1
      ? alert('Product is already in Cart')
      : setCartList(() => [...cartList, ...products.filter((p) => p.id === id)])
  }
  return (
    <div className="card-container">
      {products.map((item, index) => {
        return (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title.slice(0, 33)}</h3>
            <h4 style={{ display: 'inline' }}>
              Price:{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="15px"
                viewBox="0 -960 960 960"
                width="15px"
                fill="#ffffff"
                style={{ paddingTop: '10px' }}
              >
                <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
              </svg>
              <span>{item.price}</span>
            </h4>
            <br />

            <button
              className="add-button"
              onClick={(e) => addButtonHandler(e, item.id)}
            >
              Add to Cart
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Card
