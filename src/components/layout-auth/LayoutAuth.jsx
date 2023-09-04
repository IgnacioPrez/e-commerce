import { Outlet } from 'react-router-dom'
import './layout.css'

const LayoutAuth = () => {
  return (
    <div className='layout'>
      <Outlet />
    </div>
  )
}

export default LayoutAuth
