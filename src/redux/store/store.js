import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from '../slices/userSlices'

const reducers = combineReducers({
  user: userReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart']
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)
