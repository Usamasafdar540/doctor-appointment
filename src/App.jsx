
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Doctors from './pages/doctors'
import About from './pages/about'
import Login from './pages/login'
import Contact from './pages/contact'
import MyProfiile from './pages/myProfile'
import MyAppointments from './pages/myAppointments'
import Appointment from './pages/appointment'
import Navbar from './components/navbar'
const App = () => {
  return (
    <div className='mx-20 sm:max-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/myprofile' element={<MyProfiile />} />
        <Route path='/myappointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
      </Routes>


    </div>
  )
}

export default App