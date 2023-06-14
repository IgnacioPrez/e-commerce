import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import './card.css'

const CardProduct = ({ image, title, price, addToCart }) => {
  return (
    <Card
      sx={{ width: 300, height: 450, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
    >
      <CardMedia image={image} title={title} sx={{ width: '100%', height: 350 }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'left', gap: '10px' }}>
        <Typography variant='subtitle2'>{title}</Typography>
        <Typography variant='subtitle2'>Precio: ${price}</Typography>
        <Button onClick={addToCart} variant='contained' endIcon={<AddShoppingCartIcon />}>
          Agregar al carrito
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardProduct
