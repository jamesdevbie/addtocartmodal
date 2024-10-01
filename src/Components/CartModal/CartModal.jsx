import React, { useEffect } from 'react'
import './CartModal.css'

const CartModal = ({ cartList, setCartList, setIsModalOpened }) => {
  useEffect(() => {
    let x = document.querySelectorAll('.add-button')
    setHidden(x)
    return () => {
      document.body.style.overflow = 'scroll'
      x.forEach((xl) => (xl.style.pointerEvents = 'auto'))
    }
  }, [])

  const setHidden = (x) => {
    document.body.style.overflow = 'hidden'
    x.forEach((xl) => (xl.style.pointerEvents = 'none'))
  }

  const cardRemoveHandler = (id) => {
    setCartList(() => [...cartList.filter((cl) => cl.id !== id)])
  }
  return (
    <div className="modal">
      <div className="modal-header">
        <h1 className="pl-[40%] absolute left-[5.75%] top-[160px] font-extrabold text-[1.5rem] tracking-widest text-black">
          Shopping Cart
        </h1>
        <span className="close" onClick={() => setIsModalOpened(false)}>
          X
        </span>
      </div>
      {cartList.length !== 0 ? (
        <table>
          <caption></caption>
          <thead>
            <tr>
              <th>Item</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartList.map((cl) => {
              return (
                <tr key={cl.id}>
                  <td>
                    <img className="cart-image" src={cl.image} alt={cl.title} />
                  </td>
                  <td>{cl.title}</td>
                  <td>
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="15px"
                      viewBox="0 -960 960 960"
                      width="15px"
                      fill="#03033d"
                      style={{ paddingTop: '10px' }}
                    >
                      <path d="M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z" />
                    </svg>
                    {cl.price}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="cart-modal-button"
                      onClick={() => cardRemoveHandler(cl.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <div style={{ textAlign: 'center', marginTop: '15%' }}>
          <h1>Your Cart is Empty..!</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="240px"
            viewBox="0 -960 960 960"
            width="240px"
            fill="#03033d"
          >
            <path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default CartModal
