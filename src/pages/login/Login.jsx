import { Container } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { FormLogin } from '../../components'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/slices/userSlices'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'

export default function Login () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(logout())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [])
  return (
    <Container component='main' maxWidth='xs'>
      <FormLogin />
      <Toaster />
    </Container>
  )
}
