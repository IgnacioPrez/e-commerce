import { Container } from '@mui/material'
import { Toaster } from 'react-hot-toast'
import { FormLogin } from '../../components'
import { useValidate } from '../../hooks/useValidate'

export default function Login () {
  useValidate()
  return (
    <Container component='main' maxWidth='xs'>
      <FormLogin />
      <Toaster />
    </Container>
  )
}
