import React, { useRef, useState, useEffect } from 'react'
import { FormCode } from '../../components'
import { verifyEmail } from '../../utilities/services'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../routes/routes'
import { verifyUser } from '../../redux/slices/userSlices'
import { Toaster, toast } from 'react-hot-toast'

const VerifyCode = () => {
  const [otp, setOtp] = useState(new Array(6).fill(''))
  const { email, fullName } = useSelector((state) => state.user)
  const [activeOTPIndex, setActiveOTPIndex] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = ({ target }, index) => {
    const { value } = target
    const newOTP = [...otp]
    newOTP[index] = value.substring(value.length - 1)
    setOtp(newOTP)
    if (!value) setActiveOTPIndex(index - 1)
    else setActiveOTPIndex(index + 1)
  }

  const handleOneKeyDown = ({ key }, index) => {
    if (key === 'BackSpace') setActiveOTPIndex(index - 1)
  }
  const verify = async (e) => {
    e.preventDefault()
    const code = otp.join('')
    const dataCode = { email, code }
    const result = await verifyEmail('/verify', dataCode)
    if (result.status === 200) {
      dispatch(verifyUser(true))
      toast.success(`Usuario: ${fullName} verificado correctamente!`)
      setTimeout(() => {
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
      }, 1500)
    } else {
      toast.error('Código incorrecto')
    }
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])

  return (
    <main className='verify-container'>
      <FormCode
        handleChange={handleChange}
        otp={otp}
        verify={verify}
        handleOneKeyDown={handleOneKeyDown}
        inputRef={inputRef}
        activeOTPIndex={activeOTPIndex}
      />
      <Toaster />
    </main>
  )
}

export default VerifyCode
