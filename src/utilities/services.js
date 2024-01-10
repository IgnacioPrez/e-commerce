import axios from 'axios'
import { toast } from 'react-hot-toast'

// export const URL = import.meta.env.VITE_BASE_URL
export const URL = 'http://localhost:8080'
const { user } = JSON.parse(window.localStorage.getItem('persist:root'))
const { refreshToken } = JSON.parse(user)

export const postRequest = async (data, endpoint, token) => {
  try {
    const result = await axios.post(URL + endpoint, data, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    return result
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      return 'An unexpected error occurred'
    }
  }
}

export const deleteFromCart = async (endpoint, id, token) => {
  try {
    const response = await axios.post(`${URL}${endpoint}/${id}`, null, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      return 'Ocurrió un error inesperado'
    }
  }
}

export const getRequest = async (endpoint) => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response.status
    } else {
      return 'An unexpected error occurred'
    }
  }
}

export const verifyEmail = async (endpoint, userData) => {
  try {
    const result = await axios.patch(`${URL}/user${endpoint}`, userData, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return result
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      return 'An unexpected error occurred'
    }
  }
}

export const auth = async (endpoint, data, message) => {
  const myPromise = async () => {
    try {
      const result = await axios.post(`${URL}/user${endpoint}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return result.data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error('Correo invalido')
      } else {
        throw new Error('An unexpected error occurred')
      }
    }
  }

  return toast.promise(myPromise(), {
    loading: 'Procesando...',
    success: message,
    error: 'Error al enviar el código'
  })
}
