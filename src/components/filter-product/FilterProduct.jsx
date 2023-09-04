import './filter.css'

const FilterProduct = ({ changeFilter }) => {
  return (
    <div className='filter-container'>
      <ul className='list-filter'>
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
    </div>
  )
}

export default FilterProduct
