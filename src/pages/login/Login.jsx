import { Button, TextField, Typography } from '@mui/material'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../routes/routes'
import { userContext } from '../../store/userContext'
import { alertError, alertSucces } from '../../utilities/toastFunction'
import { Toaster } from 'react-hot-toast'
import './form.css'

const Login = () => {
  const { user } = useContext(userContext)
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = Object.fromEntries(new window.FormData(e.target))
    if (!email.length && !password.length) {
      setError('The fields are Mandatory')
      return
    }
    if (email === user.email && password === user.password) {
      alertSucces(`Que bueno tenerte de nuevo ${user.name} 😁`)
      setError('')
      setTimeout(() => {
        navigate(PrivateRoutes.HOME, { replace: true })
      }, 1000)
    } else {
      alertError('Las credenciales son incorrectas')
      setError('Las credenciales son incorrectas')
    }
  }
  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom>
          Login
        </Typography>
        <TextField label='Email...' variant='standard' name='email' />
        <TextField label='Password...' variant='standard' name='password' type='password' />
        {error && <p className='error'>{error}</p>}
        <Button variant='outlined' color='primary' type='submit'>
          Enviar
        </Button>
        <Link to={PublicRoutes.REGISTER}>¿No tienes una cuenta? Registrate.</Link>
      </form>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  )
}

export default Login
