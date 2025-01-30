
import Home from './pages/home';
import Doctors from './pages/doctors';
import About from './pages/about';
import Login from './pages/login';
import Contact from './pages/contact';
import MyProfile from './pages/myProfile';
import MyAppointments from './pages/myAppointments';
import Appointment from './pages/appointment';

// Define all routes (both protected and unprotected)
export const allRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/doctors',
    element: <Doctors />
  },
  {
    path: '/doctors/:speciality',
    element: <Doctors />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/myprofile',
    element: <MyProfile />
  },
  {
    path: '/myappointments',
    element: <MyAppointments />
  },
  {
    path: '/appointment/:docId',
    element: <Appointment />
  },
];
