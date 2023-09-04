import * as Yup from 'yup'

export const validationSchemaPay = Yup.object({
  phoneNumber: Yup.number().required('Campo requerido'),
  areaCode: Yup.number().required('Campo requerido'),
  dni: Yup.number().required('Campo requerido'),
  streetName: Yup.string().required('Campo requerido'),
  streetNumber: Yup.number().required('Campo requerido'),
  zipCode: Yup.number().required('Campo requerido'),
  email: Yup.string().email().trim().required('El correo es requerido'),
  name: Yup.string().trim().required('Campo requerido'),
  surname: Yup.string().trim().required('Campo requerido')

})

export const validationSchemaSignup = Yup.object({
  fullName: Yup.string().trim().required('Campo requerido'),
  dni: Yup.string().trim().required('Campo requerido'),
  email: Yup.string().email().trim().required('El correo es requerido'),
  password: Yup.string().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    'La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
  ).required('Contraseña requerida')
})

export const validationSchemaLogin = Yup.object({
  email: Yup.string().email().trim().required('El correo es requerido'),
  password: Yup.string().trim().required('Contraseña requerida')
})
