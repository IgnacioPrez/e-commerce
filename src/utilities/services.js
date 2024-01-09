import axios from 'axios'
import { toast } from 'react-hot-toast'

// export const URL = import.meta.env.VITE_BASE_URL
export const URL = 'http://localhost:8080'
export const instance = axios.create({
  withCredentials: true
})

export const postRequest = async (data, endpoint) => {
  try {
    const result = await instance.post(URL + endpoint, data, {
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

export const patchRequest = async (endpoint, id, token) => {
  try {
    const response = await axios.patch(`${URL}${endpoint}/${id}`, { token }, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message)
    } else {
      return 'An unexpected error occurred'
    }
  }
}

export const getRequest = async (endpoint) => {
  try {
    const { data } = await instance.get(URL + endpoint)
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
    const result = await instance.patch(`${URL}/user${endpoint}`, userData, {
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
      const result = await instance.post(`${URL}/user${endpoint}`, data, {
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

export const logoutUser = async (endpoint) => {
  try {
    const res = await axios.post(`${URL}/user${endpoint}`)
    return res
  } catch (err) {
    console.error(err)
  }
}
