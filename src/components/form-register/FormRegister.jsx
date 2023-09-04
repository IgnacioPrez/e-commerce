import React from 'react'
import { initialValuesSignUp } from '../../formik/values'
import { useFormik } from 'formik'
import { validationSchemaSignup } from '../../formik/validateFormik'
import {
  Alert,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
  createTheme
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { auth } from '../../utilities/services'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/slices/userSlices'

const FormRegister = () => {
  const [showPassword, setShowPassword] = React.useState(false)
  const defaultTheme = createTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesSignUp,
    onSubmit: async (values, { resetForm }) => {
      const { user } = await auth('/register', values, 'Usuario creado exitosamente 🚀!')
      if (user) {
        dispatch(register(user))
        setTimeout(() => {
          navigate(`/${PublicRoutes.VERIFYCODE}`, { replace: true })
        }, 2000)
        resetForm()
      }
    },
    validationSchema: validationSchemaSignup
  })
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />

        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Regístrate
          </Typography>
          <Box component='form' sx={{ mt: 1 }} onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label='Nombre Completo'
              {...getFieldProps('fullName')}
              margin='normal'
              iserror={touched.fullName && errors.fullName}
              error={!!errors.fullName && touched.fullName}
            />
            {errors.fullName && touched.fullName && <Alert severity='warning'>{errors.fullName}</Alert>}
            <TextField
              fullWidth
              label='DNI'
              {...getFieldProps('dni')}
              margin='normal'
              iserror={touched.dni && errors.dni}
              error={!!errors.dni && touched.dni}
            />
            {errors.dni && touched.dni && <Alert severity='warning'>{errors.dni}</Alert>}
            <TextField
              fullWidth
              label='Correo'
              {...getFieldProps('email')}
              margin='normal'
              iserror={touched.email && errors.email}
              error={!!errors.email && touched.email}
            />
            {errors.email && touched.email && <Alert severity='warning'>{errors.email}</Alert>}
            <OutlinedInput
              type={showPassword ? 'text' : 'password'}
              label='Contraseña'
              {...getFieldProps('password')}
              iserror={touched.password && errors.password}
              error={!!errors.password && touched.password}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={handleClickShowPassword} edge='end'>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
            />
            {errors.password && touched.password && <Alert severity='warning'>{errors.password}</Alert>}
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
              Registrarse
            </Button>
            <Grid container sx={{ color: 'rgb(26,115,232)', textDecoration: 'underline' }}>
              <Grid item>
                <Link to={`/${PublicRoutes.LOGIN}`}>
                  Ya tienes una cuenta? Inicia sesión
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default FormRegister
