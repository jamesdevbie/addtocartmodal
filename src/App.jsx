import React, { useState } from 'react'
import { Product } from './Components/Product/Product'
import NavBar from './Components/NavBar/NavBar'

const App = () => {
  const [cartvalue, setCartValue] = useState(0)
  const [cartList, setCartList] = useState([])
  return (
    <div>
      <NavBar
        cartvalue={cartvalue}
        cartList={cartList}
        setCartList={setCartList}
      />
      <Product
        setCartValue={setCartValue}
        cartList={cartList}
        setCartList={setCartList}
      />
    </div>
  )
}

export default App
