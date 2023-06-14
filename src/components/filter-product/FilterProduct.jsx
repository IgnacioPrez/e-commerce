import './filter.css'

const FilterProduct = ({ changeFilter }) => {
  return (
    <div className='filter-container'>
      <ul className='list-filter'>
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
    </div>
  )
}

export default FilterProduct
