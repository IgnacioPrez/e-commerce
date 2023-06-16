import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { slideItems } from '../../mocks/imagesSlide'
import './slide.css'
import { Item } from '../item-slide/Item'
import { Box } from '@mui/material'

export function Slide () {
  return (
    <Box sx={{ margin: '2em 0 3em 0', padding: '1em' }}>

      <Carousel>
        {slideItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Carousel>
    </Box>

  )
}
