import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fullName: '',
  dni: '',
  email: '',
  verified: false,
  id: '',
  refreshToken: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { refreshToken, user } = action.payload
      state.refreshToken = refreshToken
      state.dni = user.dni
      state.email = user.email
      state.fullName = user.fullName
      state.verified = user.verified
      state.id = user._id
    },
    register: (state, action) => {
      const { email, fullName } = action.payload
      state.email = email
      state.fullName = fullName
    },
    verifyUser: (state, action) => {
      state.verified = action.payload
    },
    logout: (state, action) => {
      return initialState
    }
  }
})

export const { loginUser, verifyUser, logout, register } = userSlice.actions
export default userSlice.reducer
