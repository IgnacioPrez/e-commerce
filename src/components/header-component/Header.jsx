import './header.css'
import SortIcon from '@mui/icons-material/Sort'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Badge, Button, Drawer } from '@mui/material'
import { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import PersonIcon from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { logout } from '../../redux/slices/userSlices'
import { persistStore } from 'redux-persist'
import { store } from '../../redux/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { CartCard } from '../card-cart'

const Header = ({ setOpenList, resetCart }) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const { items, totalPrice } = useSelector((store) => store.cart)

  const resetUser = async () => {
    dispatch(logout())
    persistStore(store).purge()
  }

  return (
    <header className='container-header'>
      <div className='icon-list-mobile' onClick={() => setOpenList(true)}>
        <SortIcon />
      </div>
      <h1>O.o Store</h1>
      <div className='container-user'>
        <PersonIcon />
        <Button variant='text' sx={{ color: '#000', position: 'realitve' }} onClick={() => setOpen(true)}>
          <Badge badgeContent={items.length} color='error'>
            <LocalMallIcon />
          </Badge>
        </Button>
        <PowerSettingsNewIcon onClick={resetUser} />
      </div>
      <Drawer
        className='cart' open={open} anchor='right' onClose={() => setOpen(false)}
      >
        <div className='container-cart'>
          {items && items.map((product) => <CartCard product={product.productId} quantity={product.quantity} resetCart={resetCart} key={product._id} />)}
        </div>
        {items.length > 0
          ? (
            <>
              <div className='total-price'>
                {totalPrice && (
                  <p>
                    Total a pagar:
                    {totalPrice.toLocaleString('es-AR', {
                      style: 'currency',
                      currency: 'ARS'
                    })}
                  </p>
                )}
                <Button variant='contained' size='medium' sx={{ color: '#fff' }}>
                  <Link to={`/${PrivateRoutes.PRIVATE}/${PrivateRoutes.PAY}`}>Pagar</Link>
                </Button>
              </div>
            </>
            )
          : (
            <>
              <div className='total-price'>
                <p>No tienes productos en el carrito</p>
              </div>
            </>
            )}
      </Drawer>
    </header>
  )
}

export default Header
