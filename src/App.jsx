
import { Route, Routes } from 'react-router-dom'
import { allRoutes } from './routes'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div className='mx-20 sm:max-[10%]'>
      <Navbar/>
      <Routes>
        {/* Render all routes from routes.js */}
        {allRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>


    </div>
  )
}

export default App