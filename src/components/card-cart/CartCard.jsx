import { Button } from '@mui/material'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'
import { toast } from 'react-hot-toast'
import { getToken, deleteFromCart, postRequest } from '../../utilities/services'
import { useSelector } from 'react-redux'

const CartCard = ({ product, quantity, resetCart }) => {
  const userStore = useSelector((store) => store.user)
  const { refreshToken } = userStore

  const removeFromCart = async (id) => {
    try {
      const { token } = await getToken('/user/profile/', refreshToken)
      await toast.promise(deleteFromCart('/cart/deletefromCartById', id, token), {
        loading: 'Espere...',
        success: <b>Se eliminó de su carrito!</b>,
        error: <b>Ocurrió un problema.</b>
      })
      resetCart()
    } catch (error) {
      console.error('Error al eliminar del carrito:', error)
      toast.error('Ocurrió un error inesperado')
    }
  }
  const addInCart = async (productId, quantity) => {
    const { token } = await getToken('/user/profile/', refreshToken)
    const valuesReq = { productId, quantity }

    await toast.promise(postRequest(valuesReq, '/cart/addInCart', token), {
      loading: 'Espere...',
      success: <b>Se agregó correctamente!</b>,
      error: <b>Ocurrio un problema.</b>
    })
    resetCart()
  }

  return (
    <div className='container-cart'>
      <div className='card-cart'>
        <img src={product.image.url} alt={product.title} />
        <p>{product.title}</p>
        <p>Cantidad: {quantity}</p>
        <p>
          Precio total:
          {product.price.toLocaleString('es-AR', {
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
