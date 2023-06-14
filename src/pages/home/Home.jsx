import { CardProduct, CardSkeleton, FilterMobile, FilterProduct, Footer, Header } from '../../components'
import './home.css'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { Slide } from '../../components/slide-images/Slide'

function Home () {
  const { addToCart } = useCart()
  const { products, isLoading, setFilter } = useFilter()
  const [openList, setOpenList] = useState(false)

  const changeFilter = (category) => {
    setFilter(category)
  }
  return (
    <div>
      <Header setOpenList={setOpenList} />
      <FilterProduct changeFilter={changeFilter} />
      <FilterMobile openList={openList} setOpenList={setOpenList} changeFilter={changeFilter} />
      <Slide />
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
      <Footer />
    </div>
  )
}

export default Home
