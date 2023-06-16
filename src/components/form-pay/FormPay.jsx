import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import debitCards from '../../assets/tarjetas.png'
import './form-pay.css'
import { allCountries } from '../../utilities/countries'
import { useFormik } from 'formik'
import { alertSucces } from '../../utilities/toastFunction'
import { PrivateRoutes } from '../../routes/routes'
import { useNavigate } from 'react-router-dom'
import { initialValuesPay } from '../../formik/values'
import { validationSchemaPay } from '../../formik/validateFormik'
import { useCart } from '../../hooks/useCart'

const FormPay = () => {
  const navigate = useNavigate()
  const { clearCart } = useCart()
  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesPay,
    onSubmit: (values, { resetForm }) => {
      alertSucces('El pago se realizo correctamente ! 😁')
      setTimeout(() => {
        navigate(PrivateRoutes.HOME, { replace: true })
      }, 1000)
      resetForm()
      clearCart()
    },
    validationSchema: validationSchemaPay
  })
  console.log(errors)
  return (
    <form className='form-pay' onSubmit={handleSubmit}>
      <div>
        <img src={debitCards} alt='debit cards' />
      </div>
      <div>
        <div className='headline'>
          <p>Número de la tarjeta</p>
          <TextField
            size='small'
            type='password'
            {...getFieldProps('numberCard')}
            isError={touched.numberCard && errors.numberCard}
            error={!!errors.numberCard && touched.numberCard}
          />
        </div>
        <div className='headline'>
          <p>Titular de la tarjeta</p>
          <TextField
            type='text'
            size='small'
            {...getFieldProps('nameOfOwner')}
            isError={touched.nameOfOwner && errors.nameOfOwner}
            error={!!errors.nameOfOwner && touched.nameOfOwner}
          />
        </div>
      </div>

      <div>
        <div className='headline'>
          <p>Código de seguridad</p>
          <TextField
            type='number' size='small'
            {...getFieldProps('codeOfSecurity')}
            isError={touched.codeOfSecurity && errors.codeOfSecurity}
            error={!!errors.codeOfSecurity && touched.codeOfSecurity}
          />
        </div>
        <div className='headline'>
          <p>Fecha de expiracion</p>
          <input
            type='date'
            {...getFieldProps('minDate')}
            isError={touched.minDate && errors.minDate}
            error={!!errors.minDate && touched.minDate}
          />
          <span> - </span>
          <input
            type='date'
            {...getFieldProps('maxDate')}
            isError={touched.maxDate && errors.maxDate}
            error={!!errors.maxDate && touched.maxDate}
          />
        </div>
      </div>
      <div>
        <div className='headline'>
          <p>Dirección</p>
          <TextField
            size='small'
            {...getFieldProps('direction')}
            isError={touched.direction && errors.direction}
            error={!!errors.direction && touched.direction}
          />
        </div>
        <div className='headline'>
          <InputLabel id='select-countries'>Provincia</InputLabel>
          <Select
            label='Provincia'
            size='small'
            labelId='select-countries'
            {...getFieldProps('city')}
            isError={touched.city && errors.city}
            error={!!errors.city && touched.city}
          >
            {allCountries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <Button color='success' variant='contained' type='submit'>
        Pagar ahora
      </Button>
      <Button color='secondary' variant='outlined' href='/Home'>
        Seguir comprando
      </Button>
    </form>
  )
}

export default FormPay
