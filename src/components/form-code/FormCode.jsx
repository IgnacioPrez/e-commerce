import React from 'react'
import './formCode.css'
import { Button } from '@mui/material'

const FormCode = ({ handleChange, handleOneKeyDown, otp, inputRef, activeOTPIndex, verify }) => {
  return (
    <section className='verify-data'>
      <h2 className='child1'>Verificación OTP</h2>
      <p className='child2'>Ingrese el código de verificación que acabamos de enviar a su dirección de correo electrónico.</p>
      <form className='otp-container child3' onSubmit={verify}>
        <div className='input-content'>
          {otp.map((_, index) => (
            <React.Fragment key={index}>
              <input
                ref={index === activeOTPIndex ? inputRef : null}
                type='text'
                className='otp-input'
                onChange={(e) => handleChange(e, index)}
                value={otp[index]}
                onKeyDown={(e) => handleOneKeyDown(e, index)}
              />
            </React.Fragment>
          ))}
        </div>
        <Button type='submit' variant='contained'>Enviar código</Button>
      </form>
    </section>
  )
}

export default FormCode
