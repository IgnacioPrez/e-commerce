import { Outlet } from 'react-router-dom'
import './formLayout.css'
const FormLayout = () => {
  return (
    <div className='layout-form-container'>
      <header className='header-form' />
      <Outlet />
      <footer className='footer-form' />
    </div>
  )
}

export default FormLayout
