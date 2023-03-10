import { CardProduct, CardSkeleton, Header } from './components'
import './app.css'
import { useCart } from './hooks/useCart'
import { useFilter } from './hooks/useFilter'
import { Drawer } from '@mui/material'
import { useState } from 'react'

function App () {
  const { addToCart } = useCart()
  const { products, isLoading, setFilter } = useFilter()
  const [openList, setOpenList] = useState(false)
  return (
    <div>
      <Header setOpenList={setOpenList} />
      <div className='filter-container'>
        <ul className='list-filter'>
          <li onClick={() => setFilter('')}>All</li>
          <li onClick={() => setFilter('Electronics')}>
            Electronics
          </li>
          <li onClick={() => setFilter('Jewelery')}>
            Jewelery
          </li>
          <li onClick={() => setFilter("Men's clothing")}>
            Men's clothing
          </li>
          <li onClick={() => setFilter("Women's clothing")}>
            Women's clothing
          </li>
        </ul>
      </div>
      <Drawer open={openList} anchor='left' onClose={() => setOpenList(false)}>
        <ul className='list-filter-mobile'>
          <li onClick={() => setFilter('')}>All</li>
          <li onClick={() => setFilter('Electronics')}>
            Electronics
          </li>
          <li onClick={() => setFilter('Jewelery')}>
            Jewelery
          </li>
          <li onClick={() => setFilter("Men's clothing")}>
            Men's clothing
          </li>
          <li onClick={() => setFilter("Women's clothing")}>
            Women's clothing
          </li>
        </ul>
      </Drawer>
      <div className='container-cards'>
        {products.map((product) => {
          return isLoading
            ? (
              <CardSkeleton key={product.id} />
              )
            : (
              <CardProduct
                key={product.id}
                image={product.image}
                price={product.price}
                title={product.title}
                addToCart={() => addToCart(product)}
              />
              )
        })}
      </div>
    </div>
  )
}

export default App
