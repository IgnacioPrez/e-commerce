import { Button } from '@mui/material'
import { useCart } from '../../hooks/useCart'
import { Checkout } from '../checkout'
import './payment.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { Toaster } from 'react-hot-toast'

const ProductsPayment = () => {
  const { cart, removeFromCart } = useCart()
  return (
    <div className='content-pay'>
      <p className='item1 '>Descripción de tu pedido:</p>
      <section className='products-pay item2'>
        <div className='info-product-container title-info'>
          <p>Producto</p>
          <p>Precio</p>
          <p>Cantidad</p>
        </div>
        {cart.map((product) => {
          return (
            <div key={product.id} className='info-product-container'>
              <div className='product-info-1'>
                <img src={product.image} alt={product.title} />
                <div className='description-product'>
                  <p>{product.title}</p>
                </div>
              </div>
              <div className='product-info-2'>
                <p>${product.price}</p>
              </div>
              <div className='product-info-3'>
                <p>{product.quantity}</p>
              </div>
              <Button onClick={() => removeFromCart(product)}>
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
