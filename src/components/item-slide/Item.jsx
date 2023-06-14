import { Paper } from '@mui/material'

export function Item ({ image }) {
  return (

    <Paper>
      <img className='image-slide' src={image} alt='Imagen del Slide' />
    </Paper>

  )
}
