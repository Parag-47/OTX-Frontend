import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MainDashboard from './HomePages/MainDashboard'
import AllUsers from './HomePages/AllUsers'
import AuthLayout from './components/layout/AuthLayout'
import Signup from './pages/auth/Signup'
import Login from './pages/auth/AdminLogin'
import ProtectedRoute from './components/ProtectedRoute'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AdminProfile from './pages/AdminProfile'
import AllQueries from './HomePages/AllQueries'

function App() {


  return (
    <div className='container mx-auto'>
      <ToastContainer />
      <Routes>
          <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}>
            <Route index element={<MainDashboard/>}/>  
            <Route path='dashboard' element={<MainDashboard/>}/>
            <Route path='allusers' element={<AllUsers/>}/>
            <Route path='allQueries' element={<AllQueries/>}/>
            <Route path='growth' element={<MainDashboard/>}/>
            <Route path='adminProfile' element={<AdminProfile/>}/>
          </Route>

          <Route path='/auth/*' element={<AuthLayout/>}>
            <Route path='signup' element={<Signup/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
          
      </Routes>
    </div>
  )
}

export default App
