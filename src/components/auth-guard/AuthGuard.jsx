import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../routes/routes'

const AuthGuard = ({ privateValidation }) => {
  const userState = useSelector((store) => store.user)
  return userState.refreshToken
    ? (
        privateValidation
          ? (
            <Outlet />
            )
          : (
            <Navigate replace to={PrivateRoutes.PRIVATE} />

            )
      )
    : (
      <Navigate replace to={PublicRoutes.LOGIN} />
      )
}

export default AuthGuard
