import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { PrivateRoutes, PublicRoutes } from '../../routes/routes'
import { initialValuesLogin } from '../../formik/values'
import { validationSchemaLogin } from '../../formik/validateFormik'
import { useFormik } from 'formik'
import { auth } from '../../utilities/services'
import { Alert, IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/slices/userSlices'

export default function FormLogin () {
  const [showPassword, setShowPassword] = useState(false)
  const defaultTheme = createTheme()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
    initialValues: initialValuesLogin,
    onSubmit: async (values, { resetForm }) => {
      const result = await auth('/login', values, 'Bienvenido 😁!')
      if (result) {
        dispatch(loginUser(result))
        resetForm()
        setTimeout(() => {
          navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
        }, 2000)
      }
    },
    validationSchema: validationSchemaLogin
  })
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Iniciar sesión
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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
              Iniciar sesión
            </Button>
            <Grid container sx={{ gap: '20px', color: 'rgb(26,115,232)', textDecoration: 'underline' }}>
              <Grid item>
                <Link to={`/${PublicRoutes.SIGNUP}`}>
                  No tienes una cuenta? Regístrate
                </Link>

              </Grid>
              <Grid item>
                <Link to={`/${PublicRoutes.VERIFYCODE}`}>
                  Verifica tu código
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
