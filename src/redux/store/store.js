import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../slices/userSlices'
import cartReducer from '../slices/cartSlices'
const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
