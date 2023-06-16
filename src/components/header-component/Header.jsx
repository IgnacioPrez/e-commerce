import './header.css'
import SortIcon from '@mui/icons-material/Sort'
import PersonIcon from '@mui/icons-material/Person'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { Badge, Button, Drawer } from '@mui/material'
import { useContext, useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { userContext } from '../../store/userContext'
import { CartCard } from '../card-cart'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import { removeToLocalStorage } from '../../utilities/functionWithLocalStorage'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'

const Header = ({ setOpenList }) => {
  const [open, setOpen] = useState(false)
  const { cart, totalPrice } = useCart()
  const { user, setUser } = useContext(userContext)
  const navigate = useNavigate()

  const logout = () => {
    setUser({
      name: '', lastName: '', email: '', id: '', password: ''
    })
    setTimeout(() => {
      navigate(PublicRoutes.LOGIN, { replace: true })
    }, 1000)
    removeToLocalStorage('user')
  }

  return (
    <header className='container-header'>
      <div className='icon-list-mobile' onClick={() => setOpenList(true)}>
        <SortIcon />
      </div>
      <h1>O.o Store</h1>
      <div className='container-user'>
        <PersonIcon />
        <p>{user.name}</p>
        <Button variant='text' sx={{ color: '#000', position: 'realitve' }} onClick={() => setOpen(true)}>
          <Badge badgeContent={cart.length} color='error'>
            <LocalMallIcon />
          </Badge>
        </Button>
        <PowerSettingsNewIcon onClick={logout} />
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
