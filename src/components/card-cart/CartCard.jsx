import { Button } from '@mui/material'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { useCart } from '../../hooks/useCart'

const CartCard = ({ product }) => {
  const { removeFromCart, addToCart } = useCart()
  return (
    <div className='container-cart'>
      <div className='card-cart'>
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
    </div>

  )
}

export default CartCard
