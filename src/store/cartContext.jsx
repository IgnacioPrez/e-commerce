import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const cartContext = createContext()

export const CartProvider = ({ children }) => {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
  const totalPrice = state.map((el) => el.price).reduce((prev, acc) => acc + prev, 0)
  return (
    <cartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart,
      totalPrice
    }}
    >
      {children}
    </cartContext.Provider>
  )
}
