import { Drawer } from '@mui/material'
import React from 'react'

const FilterMobile = ({ openList, setOpenList, changeFilter }) => {
  return (
    <Drawer open={openList} anchor='left' onClose={() => setOpenList(false)}>
      <ul className='list-filter-mobile'>
        <li onClick={() => changeFilter('')}>Todos</li>
        <li onClick={() => changeFilter('Electronics')}>
          Electronicos
        </li>
        <li onClick={() => changeFilter('Jewelery')}>
          Joyas
        </li>
        <li onClick={() => changeFilter("Men's clothing")}>
          Prenda para hombre
        </li>
        <li onClick={() => changeFilter("Women's clothing")}>
          Prenda para mujer
        </li>
      </ul>
    </Drawer>
  )
}

export default FilterMobile
