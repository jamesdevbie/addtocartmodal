import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

const Product = ({ setCartValue, setCartList, cartList }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts(URL)
  }, [])

  const URL = 'https://fakestoreapi.com/products'

  const getProducts = async (URL) => {
    try {
      let result = await fetch(URL)
      let data = await result.json()
      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="products">
      <Card
        products={products}
        setCartValue={setCartValue}
        setCartList={setCartList}
        cartList={cartList}
      />
    </div>
  )
}

export { Product }
