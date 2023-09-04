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
  const response = await fetch(`${URL}/products/filter?filterName=${category}`)
  try {
    const { products } = await response.json()
    return products
  } catch (err) {
    console.log(err)
  }
}
