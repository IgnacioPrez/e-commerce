import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const NotFound = lazy(() => import('../pages/not-found/NotFound'))

export const RoutesWithNotFound = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path='*' element={<NotFound />} />

    </Routes>
  )
}
