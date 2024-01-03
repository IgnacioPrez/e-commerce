import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      return initialState
    },
    getCart: (state, action) => {
      const newState = {
        items: action.payload.items ? action.payload.items : [],
        totalPrice: action.payload.totalPrice
      }
      return newState
    }
  }
})
export const { clearCart, getCart } = cartSlice.actions
export default cartSlice.reducer
