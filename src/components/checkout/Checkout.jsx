import './checkout.css'
import { FormPay } from '../form-pay'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const { totalPrice } = useSelector((store) => store.cart)

  return (
    <aside className='complete-purchase'>
      <p>TOTAL A PAGAR: {totalPrice.toLocaleString('es-AR', {
        style: 'currency',
        currency: 'ARS'
      })}
      </p>
      <FormPay />
    </aside>
  )
}

export default Checkout
