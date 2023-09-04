import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { lazy, Suspense } from 'react'
import { AuthGuard, LayoutAuth, Loader } from './components'
import { RoutesWithNotFound } from './utilities/routes-with-not-found'
const Private = lazy(() => import('./pages/private/Private'))
const Signup = lazy(() => import('./pages/signup/Signup'))
const Login = lazy(() => import('./pages/login/Login'))
const VerifyCode = lazy(() => import('./pages/verfied-code/VerifyCode'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <RoutesWithNotFound>
          <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
          <Route element={<LayoutAuth />}>
            <Route path={PublicRoutes.SIGNUP} element={<Signup />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
          </Route>
          <Route path={PublicRoutes.VERIFYCODE} element={<VerifyCode />} />
          <Route element={<AuthGuard privateValidation />}>
            <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
          </Route>
        </RoutesWithNotFound>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
