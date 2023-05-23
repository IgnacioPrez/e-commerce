import { Drawer } from '@mui/material'
import React from 'react'

const FilterMobile = ({ openList, setOpenList, changeFilter }) => {
  return (
    <Drawer open={openList} anchor='left' onClose={() => setOpenList(false)}>
      <ul className='list-filter-mobile'>
        <li onClick={() => changeFilter('')}>All</li>
        <li onClick={() => changeFilter('Electronics')}>
          Electronics
        </li>
        <li onClick={() => changeFilter('Jewelery')}>
          Jewelery
        </li>
        <li onClick={() => changeFilter("Men's clothing")}>
          Men's clothing
        </li>
        <li onClick={() => changeFilter("Women's clothing")}>
          Women's clothing
        </li>
      </ul>
    </Drawer>
  )
}

export default FilterMobile
