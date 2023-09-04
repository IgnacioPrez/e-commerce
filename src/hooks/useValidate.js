import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../routes/routes'
import { useEffect } from 'react'

export function useValidate () {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  useEffect(() => {
    return user.token && user.verified ? navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true }) : navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [user.token, user.verified])
}
