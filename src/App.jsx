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
import Footer from './Pages/Footer'
import JobDetailes from './components/JobDetailes'
import ApplyJob from './components/ApplyJob'

function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/jobs/:id' element={<JobDetailes/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/recruiter' element={<Recruiter />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/findjob' element={<Findjob />}></Route>
        <Route path='/candidate' element={<Candidate />}></Route>
        <Route path='/applyJob/:id' element={<ApplyJob/>}></Route>


      </Routes>
      <Footer />
    </div>
  )
}

export default App
