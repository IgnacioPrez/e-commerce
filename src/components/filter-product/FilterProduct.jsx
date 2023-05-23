import './filter.css'

const FilterProduct = ({ changeFilter }) => {
  return (
    <div className='filter-container'>
      <ul className='list-filter'>
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
    </div>
  )
}

export default FilterProduct
