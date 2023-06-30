import './header.css'
import SortIcon from '@mui/icons-material/Sort'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Badge, Button, Drawer } from '@mui/material'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { CartCard } from '../card-cart'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'

const Header = ({ setOpenList }) => {
  const [open, setOpen] = useState(false)
  const { cart, totalPrice } = useCart()

  return (
    <header className='container-header'>
      <div className='icon-list-mobile' onClick={() => setOpenList(true)}>
        <SortIcon />
      </div>
      <h1>O.o Store</h1>
      <div className='container-user'>
        <Button variant='text' sx={{ color: '#000', position: 'realitve' }} onClick={() => setOpen(true)}>
          <Badge badgeContent={cart.length} color='error'>
            <LocalMallIcon />
          </Badge>
        </Button>
        <PowerSettingsNewIcon />
      </div>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <div className='container-cart'>
          {
            cart.map((product) => <CartCard product={product} key={product.id} />)
          }
        </div>
        <div className='total-price'>
          <p>Total a pagar: ${totalPrice.toFixed(2)}</p>
          <Button variant='contained' size='medium' href='/Pay'>
            Pagar
          </Button>
        </div>
      </Drawer>
    </header>
  )
}

export default Header
