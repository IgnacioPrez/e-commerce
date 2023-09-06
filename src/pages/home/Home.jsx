import { CardProduct, CardSkeleton, FilterMobile, FilterProduct, Footer, Header } from '../../components'
import './home.css'
import { useEffect, useState } from 'react'
import { useFilter } from '../../hooks/useFilter'
import { Slide } from '../../components/slide-images/Slide'
import { postRequest } from '../../utilities/services'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsInCart } from '../../models/products.service'

function Home () {
  const { products, isLoading, setFilter } = useFilter()
  const [openList, setOpenList] = useState(false)
  const dispatch = useDispatch()
  const { token } = useSelector((store) => store.user)

  const resetCart = () => {
    dispatch(getAllProductsInCart(token))
  }

  useEffect(() => {
    dispatch(getAllProductsInCart(token))
  }, [])

  const addToCart = async (productId, quantity) => {
    const valuesReq = { productId, quantity }
    await toast.promise(
      postRequest(valuesReq, '/cart/addInCart', token),
      {
        loading: 'Espere...',
        success: <b>Se agregó correctamente!</b>,
        error: <b>Ocurrio un problema.</b>
      }
    )
    resetCart()
  }
  const changeFilter = (category) => {
    setFilter(category)
  }
  return (
    <div>
      <Header setOpenList={setOpenList} resetCart={resetCart} />
      <FilterProduct changeFilter={changeFilter} />
      <FilterMobile openList={openList} setOpenList={setOpenList} changeFilter={changeFilter} />
      <Slide />
      <div className='container-cards'>
        {products.map((product) => {
          return isLoading
            ? (
              <CardSkeleton key={product._id} />
              )
            : (
              <CardProduct
                key={product._id}
                image={product.image.url}
                price={product.price}
                title={product.title}
                addToCart={() => addToCart(product._id, 1)}
              />
              )
        })}
      </div>
      <Footer />
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
    </div>
  )
}

export default Home
