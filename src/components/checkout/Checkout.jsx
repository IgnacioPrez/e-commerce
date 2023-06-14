import { Button } from '@mui/material'
import './checkout.css'
import { useCart } from '../../hooks/useCart'
const Checkout = () => {
  const { cart, totalPrice } = useCart()
  return (
    <aside className='complete-purchase'>
      <p className='item-1'>Tu compra</p>
      <div className='item-2'>
        <p>Productos</p>
        <p>{cart.length}</p>
      </div>
      <div className='item-3'>
        <p>TOTAL</p>
        <p>${totalPrice}</p>
      </div>
      <div className='item-4 btn-pay-content'>
        <Button variant='contained' color='success'>
          Finalizar Compra
        </Button>
        <Button color='secondary' variant='contained' href='/Home'>
          Seguir comprando
        </Button>
      </div>

    </aside>
  )
}

export default Checkout
