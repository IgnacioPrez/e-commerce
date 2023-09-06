import Container from '@mui/material/Container'
import { FormRegister } from '../../components'
import { Toaster } from 'react-hot-toast'

export default function Signup () {
  return (
    <Container component='main' maxWidth='xs' sx={{ padding: '2em' }}>
      <FormRegister />
      <Toaster />
    </Container>
  )
}
