import { getCart } from '../redux/slices/cartSlices'
import { getRequest } from '../utilities/services'

const URL = import.meta.env.VITE_BASE_URL

export const getAllProducts = async () => {
  const response = await fetch(`${URL}/products/`)
  try {
    const result = await response.json()
    return result.products
  } catch (err) {
    console.log(err)
  }
}

export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${URL}/products/filter?filterName=${category}`)
    const { filterProducts } = await response.json()
    return filterProducts
  } catch (err) {
    console.log(err)
  }
}

export const getAllProductsInCart = (token) => async (dispatch) => {
  try {
    const { cart } = await getRequest('/cart/', token)
    dispatch(getCart(cart))
    return
  } catch (error) {
    console.log(error)
  }
}
