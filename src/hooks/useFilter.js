import { useEffect, useState } from 'react'
import { getAllProducts, getProductsByCategory } from '../models/products.service'

export function useFilter () {
  const [filter, setFilter] = useState('')
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (filter === '') {
          setIsLoading(true)
          const allProduct = await getAllProducts()
          setProducts(allProduct)
        } else {
          setIsLoading(true)
          const productCategory = await getProductsByCategory(filter.toLowerCase())
          setProducts(productCategory)
        }
      } catch (e) {
        console.error(e)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProduct()
  }, [filter])
  return { products, isLoading, setFilter, filter }
}
