import { useContext } from 'react'
import { userContext } from '../../store/userContext'
import { Navigate, Outlet } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'

const AuthGuard = () => {
  const { user } = useContext(userContext)
  return user.id ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />
}

export default AuthGuard
