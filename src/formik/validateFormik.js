import * as Yup from 'yup'

const passwordREGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/

export const validationSchemaSignup = Yup.object({
  name: Yup.string().trim().required('Field required'),
  lastName: Yup.string().trim().required('Field required'),
  email: Yup.string().email('Invalid email').required('Field required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(
      passwordREGEX,
      'The password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'
    )
    .required('Field required')
})
