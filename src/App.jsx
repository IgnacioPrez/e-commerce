import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './routes/routes'
import { lazy, Suspense } from 'react'
import { Loader } from './components'

const Home = lazy(() => import('./pages/home/Home'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))
const Pay = lazy(() => import('./pages/payment/Pay'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.PAY} element={<Pay />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
