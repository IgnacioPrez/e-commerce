import { Button } from '@mui/material'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { toast } from 'react-hot-toast'
import { getToken, patchRequest, postRequest } from '../../utilities/services'

const CartCard = ({ product, quantity, resetCart }) => {
  const removeFromCart = async (id) => {
    const { token } = await getToken('/user/profile/')
    if (token) {
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
  }

  const addInCart = async (productId, quantity) => {
    const { token } = await getToken('/user/profile/')
    const valuesReq = { productId, quantity, token }
    await toast.promise(
      postRequest(valuesReq, '/cart/addInCart'),
      {
        loading: 'Espere...',
        success: <b>Se agregó correctamente!</b>,
        error: <b>Ocurrio un problema.</b>
      }
    )
    resetCart()
  }

  return (
    <div className='container-cart'>
      <div className='card-cart'>
        <img src={product.image.url} alt={product.title} />
        <p>{product.title}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio total:{product.price.toLocaleString('es-AR', {
          style: 'currency',
          currency: 'ARS'
        })}
        </p>
        <div className='cart-btn'>
          <Button variant='contained' color='success' onClick={() => addInCart(product._id, 1)}>
            <AddIcon />
          </Button>
          <Button variant='contained' color='error' onClick={() => removeFromCart(product._id)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>
    </div>

  )
}

export default CartCard
