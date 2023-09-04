import Container from '@mui/material/Container'
import { FormRegister } from '../../components'
import { Toaster } from 'react-hot-toast'
import { useValidate } from '../../hooks/useValidate'

export default function Signup () {
  useValidate()
  return (
    <Container component='main' maxWidth='xs' sx={{ padding: '2em' }}>
      <FormRegister />
      <Toaster />
    </Container>
  )
}
