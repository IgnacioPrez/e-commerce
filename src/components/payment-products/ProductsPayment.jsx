import { Button } from '@mui/material'
import { Checkout } from '../checkout'
import './payment.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Toaster, toast } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { getToken, patchRequest } from '../../utilities/services'
import { getAllProductsInCart } from '../../models/products.service'
import { getCart } from '../../redux/slices/cartSlices'

const ProductsPayment = () => {
  const { items } = useSelector((store) => store.cart)
  const dispatch = useDispatch()
  const resetCart = async () => {
    const { token } = await getToken('/user/profile/')
    if (token) {
      const data = await getAllProductsInCart(token)
      dispatch(getCart(data))
    }
  }

  const convertPrice = (price) => price.toLocaleString('es-Ar', { style: 'currency', currency: 'ARS' })
  const removeFromCart = async (id) => {
    const { token } = await getToken('/user/profile/')

    await toast.promise(
      patchRequest('/cart/deletefromCartById', id, token),
      {
        loading: 'Espere...',
        success: <b>Se elimino de su carrito!</b>,
        error: <b>Ocurrio un problema.</b>
      }
    )
    resetCart()
  }

  return (
    <div className='content-pay'>
      <p className='item1 '>Descripción de tu pedido:</p>
      <section className='products-pay item2'>
        <div className='info-product-container title-info'>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
        </div>
        {items.length > 0 && items.map(({ productId, quantity, _id }) => {
          return (
            <div key={_id} className='info-product-container'>
              <div className='product-info-1'>
                <img src={productId.image.url} alt={productId.title} />
                <div className='description-product'>
                  <p>{productId.title}</p>
                  <p>{productId.description}</p>
                </div>
              </div>
              <div className='product-info-2'>
                <p>{convertPrice(productId.price)}</p>
              </div>
              <div className='product-info-3'>
                <p>{quantity}</p>
              </div>
              <Button onClick={() => removeFromCart(productId._id)}>
                <DeleteForeverIcon color='action' />
              </Button>
            </div>
          )
        })}
      </section>
      <Checkout />
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  )
}

export default ProductsPayment
