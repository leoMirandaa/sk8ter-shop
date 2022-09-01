import React, { useState } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ( {children} ) => {

  const initialState = {
    numberOfProducts: 0,
    products: []
  }

  const [userCart, setUserCart] = useState(initialState)

  return (
    <CartContext.Provider value={{ userCart, setUserCart }}>
      { children }
    </CartContext.Provider>
  )

}
