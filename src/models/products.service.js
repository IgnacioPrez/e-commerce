import axios from 'axios'
import { URL } from '../utilities/services'

export const getAllProducts = async () => {
  const response = await fetch(`${URL}/products/`)
  try {
    const result = await response.json()
    return result.products
  } catch (err) {
    console.error(err)
    throw new Error('Server Error')
  }
}

export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${URL}/products/filter?filterName=${category}`)
    const { filterProducts } = await response.json()
    return filterProducts
  } catch (err) {
    console.log(err)
    throw new Error('Server Error')
  }
}

export const getAllProductsInCart = async (token) => {
  try {
    const { data } = await axios.get(`${URL}/cart/`, {
      headers: {
        'x-token': token
      }
    })
    return data.cart
  } catch (error) {
    console.error(error)
    throw new Error('Server Error')
  }
}
