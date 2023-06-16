import { Button, TextField, Typography } from '@mui/material'
import '../login/form.css'
import { useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { userContext } from '../../store/userContext'
import { Toaster } from 'react-hot-toast'
import { alertSucces } from '../../utilities/toastFunction'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'
import { saveToLocalStorage } from '../../utilities/functionWithLocalStorage'
import { useFormik } from 'formik'
import { validationSchemaSignup } from '../../formik/validateFormik'
import { initialValuesSignup } from '../../formik/values'

const Singup = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(userContext)
  const id = uuid()
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesSignup,
    onSubmit: (values, { resetForm }) => {
      setUser({ ...values, id })
      saveToLocalStorage('user', { ...values, id })
      alertSucces(`Bienvenido ${values.name} ! 😁`)
      setTimeout(() => {
        navigate(PublicRoutes.LOGIN, { replace: true })
      }, 1000)
      resetForm()
    },
    validationSchema: validationSchemaSignup
  })

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit}>
        <Typography variant='h4' gutterBottom>
          Signup
        </Typography>
        <TextField
          label='Name...'
          variant='standard'
          {...getFieldProps('name')}
          isError={touched.name && errors.name}
          error={!!errors.name && touched.name}
        />

        {errors.name && <p className='error'>{errors.name}</p>}
        <TextField
          label='LastName...'
          variant='standard'
          {...getFieldProps('lastName')}
          isError={touched.lastName && errors.lastName}
          error={!!errors.lastName && touched.lastName}
        />

        {errors.lastName && <p className='error'>{errors.lastName}</p>}
        <TextField
          label='Email...'
          variant='standard'
          {...getFieldProps('email')}
          isError={touched.email && errors.email}
          error={!!errors.email && touched.email}
        />
        {errors.email && <p className='error'>{errors.email}</p>}
        <TextField
          label='Password...'
          variant='standard'
          type='password'
          {...getFieldProps('password')}
          isError={touched.password && errors.password}
          error={!!errors.password && touched.password}
        />
        {errors.password && <p className='error'>{errors.password}</p>}
        <Button variant='outlined' color='primary' type='submit'>
          Enviar
        </Button>
      </form>
      <Toaster position='top-right' reverseOrder={false} />
    </div>
  )
}

export default Singup
