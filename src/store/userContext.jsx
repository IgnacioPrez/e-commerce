import { createContext, useState } from 'react'
import { getLocalStorage } from '../utilities/functionWithLocalStorage'

export const userContext = createContext()

const userState = getLocalStorage('user')
  ? getLocalStorage('user')
  : {
      name: '',
      lastName: '',
      email: '',
      id: '',
      password: ''
    }
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(userState)
  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>
}
