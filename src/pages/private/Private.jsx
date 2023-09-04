import React, { lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { PrivateRoutes } from '../../routes/routes'
import { RoutesWithNotFound } from '../../utilities/routes-with-not-found'

const Home = lazy(() => import('../home/Home'))
const Pay = lazy(() => import('../payment/Pay'))

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
      <Route path={PrivateRoutes.HOME} element={<Home />} />
      <Route path={PrivateRoutes.PAY} element={<Pay />} />
    </RoutesWithNotFound>
  )
}

export default Private
