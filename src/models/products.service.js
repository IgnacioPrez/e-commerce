export const getAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const result = response.json()
  return result
}

export const getProductsByCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  const result = response.json()
  return result
}
