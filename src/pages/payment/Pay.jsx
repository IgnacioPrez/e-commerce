import './pay.css'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import PinDropIcon from '@mui/icons-material/PinDrop'
import WrongLocationIcon from '@mui/icons-material/WrongLocation'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { ProductsPayment } from '../../components/payment-products'

const Pay = () => {
  return (
    <main>
      <header className='header-pay'>
        <div className='info-pay'>
          <div className='info-category'>
            <PinDropIcon color='success' />
            <p>Seguí tu compra</p>
          </div>
          <div className='info-category'>
            <WrongLocationIcon color='success' />
            <p>Retirá tu compra</p>
          </div>
          <div className='info-category'>
            <SupportAgentIcon color='success' />
            <p>Centro de Ayuda</p>
          </div>
        </div>
        <div className='title-pay'>
          <LocalMallIcon color='success' />
          <h2> CARRITO DE COMPRAS</h2>
        </div>
      </header>
      <ProductsPayment />
    </main>
  )
}

export default Pay
