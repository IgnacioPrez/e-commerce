import './header.css'
import SortIcon from '@mui/icons-material/Sort'
import PersonIcon from '@mui/icons-material/Person'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { Badge, Button, Drawer } from '@mui/material'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'

const Header = ({ setOpenList }) => {
  const [open, setOpen] = useState(false)
  const { cart, removeFromCart, addToCart, totalPrice } = useCart()
  return (
    <header className='container-header'>
      <div className='icon-list-mobile' onClick={() => setOpenList(true)}>
        <SortIcon />
      </div>
      <h1>O.o Store</h1>
      <div className='container-user'>
        <PersonIcon />
        <Button variant='text' sx={{ color: '#000', position: 'realitve' }} onClick={() => setOpen(true)}>
          <Badge badgeContent={cart.length} color='error'>
            <LocalMallIcon />
          </Badge>
        </Button>
      </div>
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <div className='container-cart'>
          {cart.map((product) => {
            return (
              <div key={product.id} className='card-cart'>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total price: ${product.price}</p>
                <div className='cart-btn'>
                  <Button onClick={() => addToCart(product)} variant='contained' color='success'>
                    <AddIcon />
                  </Button>
                  <Button onClick={() => removeFromCart(product)} variant='contained' color='error'>
                    <DeleteIcon />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
        <div className='total-price'>
          <p>Total to be paid ${totalPrice.toFixed(2)}</p>
        </div>
      </Drawer>
    </header>
  )
}

export default Header
