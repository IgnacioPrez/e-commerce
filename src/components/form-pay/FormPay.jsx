import { Button, TextField } from '@mui/material'
import './form-pay.css'
import { useFormik } from 'formik'
import { initialValuesPay } from '../../formik/values'
import { validationSchemaPay } from '../../formik/validateFormik'
import { postRequest } from '../../utilities/services'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/slices/cartSlices'

const FormPay = () => {
  const dispatch = useDispatch()
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesPay,
    onSubmit: async (values, { resetForm }) => {
      const { data } = await postRequest(values, '/pay/create-payment')
      if (data.init_point) {
        window.location.href = data.init_point
        resetForm()
        dispatch(clearCart())
      }
    },
    validationSchema: validationSchemaPay
  })
  return (
    <div className='form-pay'>
      <form className='form-container' onSubmit={handleSubmit}>
        <div className='child'>
          <TextField
            label='Código de área'
            variant='filled'
            type='number'
            {...getFieldProps('areaCode')}
            iserror={touched.areaCode && errors.areaCode}
            error={!!errors.areaCode && touched.areaCode}
          />
          <TextField
            label='Número de teléfono'
            variant='filled'
            fullWidth
            type='number'
            {...getFieldProps('phoneNumber')}
            iserror={touched.phoneNumber && errors.phoneNumber}
            error={!!errors.phoneNumber && touched.phoneNumber}
          />
        </div>
        <div className='child'>
          <TextField
            label='Correo'
            variant='filled'
            fullWidth
            {...getFieldProps('email')}
            iserror={touched.email && errors.email}
            error={!!errors.email && touched.email}
          />
          <TextField
            label='DNI'
            variant='filled'
            fullWidth
            type='number'
            {...getFieldProps('dni')}
            iserror={touched.dni && errors.dni}
            error={!!errors.dni && touched.dni}
          />
        </div>
        <div className='child'>
          <TextField
            label='Calle'
            variant='filled'
            fullWidth
            {...getFieldProps('streetName')}
            iserror={touched.streetName && errors.streetName}
            error={!!errors.streetName && touched.streetName}
          />
          <TextField
            label='Número de calle'
            variant='filled'
            type='number'
            {...getFieldProps('streetNumber')}
            iserror={touched.streetNumber && errors.streetNumber}
            error={!!errors.streetNumber && touched.streetNumber}
          />
        </div>
        <div className='child'>
          <TextField
            label='Nombre'
            variant='filled'
            fullWidth
            {...getFieldProps('name')}
            iserror={touched.name && errors.name}
            error={!!errors.name && touched.name}
          />
          <TextField
            label='Apellido'
            variant='filled'
            fullWidth
            {...getFieldProps('surname')}
            iserror={touched.surname && errors.surname}
            error={!!errors.surname && touched.surname}
          />
        </div>
        <div className='child'>
          <TextField
            label='Código postal'
            variant='filled'
            {...getFieldProps('zipCode')}
            iserror={touched.zipCode && errors.zipCode}
            error={!!errors.zipCode && touched.zipCode}
          />
        </div>
        <Button color='success' variant='contained' type='submit'>
          Pagar ahora
        </Button>
      </form>

      <Button color='secondary' variant='contained' href='/'>
        Seguir comprando
      </Button>
    </div>
  )
}

export default FormPay
