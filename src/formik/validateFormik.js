import * as Yup from 'yup'
import { parse, isDate } from 'date-fns'

function parseDateString (value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, 'yyyy-MM-dd', new Date())

  return parsedDate
}

const minYear = new Date('January 2013')
const maxYear = new Date('December 2033')

export const validationSchemaPay = Yup.object({
  numberCard: Yup.number().required('Campo requerido'),
  nameOfOwner: Yup.string().trim().required('Campo requerido'),
  codeOfSecurity: Yup.number().min(100, 'credenciales invalidas'),
  minDate: Yup.date().transform(parseDateString).min(minYear),
  maxDate: Yup.date().transform(parseDateString).max(maxYear),
  direction: Yup.string().trim().required('Campo requerido'),
  city: Yup.string().required('Campo requerido')
})
