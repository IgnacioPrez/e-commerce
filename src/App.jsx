import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from './routes/routes'
import { lazy, Suspense } from 'react'
import { AuthGuard, Loader } from './components'
import { FormLayout } from './layout'
const Home = lazy(() => import('./pages/home/Home'))
const Login = lazy(() => import('./pages/login/Login'))
const Singup = lazy(() => import('./pages/signup/Singup'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to={PrivateRoutes.HOME} />} />
          <Route element={<FormLayout />}>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Singup />} />
          </Route>

          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.HOME} element={<Home />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
