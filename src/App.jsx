import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NotFound from './NotFound/NotFound'
import Navbar from './Pages/Navbar'
import Registration from './Pages/Register'
import Login from './Pages/Login'
import Recruiter from './Pages/Recruiter'
import Contact from './Pages/Contact'
import Findjob from './Pages/Findjob'
import Candidate from './Pages/Candidate'

function App() {
  return (

    <div className='sm:max-w-7xl mx-auto px-2'>
      <Navbar/>
      <Routes>
        <Route path='*' element={<NotFound/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/recruiter' element={<Recruiter/>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/findjob' element={<Findjob />}></Route>
        <Route path='/candidate' element={<Candidate />}></Route>

        
      </Routes>
    </div>
  )
}

export default App
