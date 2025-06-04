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
import Footer from './Pages/Footer'
import JobDetailes from './components/JobDetailes'
import ApplyJob from './components/ApplyJob'
import MyApplications from './components/MyApplications'
import Dashboard from './Pages/Dashboard'
import AdminHome from './components/Home/AdminHome'
import Companies from './components/Company/Companies'
import Services from './components/Service/Services'
import TopCompanyJobs from './components/Company/TopCompanyJobs'
import FeatureCompanyDetails from './components/CompanyDetailes/FeatureCompanyDetails'

function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/jobs/:id' element={<JobDetailes />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/recruiter' element={<Recruiter />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/companies' element={<Companies />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/top-companies-job/:title' element={<TopCompanyJobs />}></Route>
        <Route path='/findjob' element={<Findjob />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/home' element={<AdminHome />}></Route>
          <Route path='/dashboard/myApplications' element={<MyApplications />} />
        </Route>
        <Route path='/applyJob/:id' element={<ApplyJob />}></Route>
        <Route path='/featurescompanydetails/:title' element={<FeatureCompanyDetails/>}></Route>


      </Routes>
      <Footer />
    </div>
  )
}

export default App
