import { Drawer } from '@mui/material'
import React from 'react'

const FilterMobile = ({ openList, setOpenList, changeFilter }) => {
  return (
    <Drawer open={openList} anchor='left' onClose={() => setOpenList(false)}>
      <ul className='list-filter-mobile'>
        <li onClick={() => changeFilter('')}>Todos</li>
        <li onClick={() => changeFilter('technology')}>
          Electronicos
        </li>
        <li onClick={() => changeFilter('jewelry')}>
          Joyas
        </li>
        <li onClick={() => changeFilter('garment for man')}>
          Prenda para hombre
        </li>
        <li onClick={() => changeFilter('garment for woman')}>
          Prenda para mujer
        </li>
      </ul>
    </Drawer>
  )
}

export default FilterMobile
