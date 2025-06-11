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
import MyProfile from './components/ProfileInfo/MyProfile'
import Bookmarks from './components/ProfileInfo/Bookmarks'
import Profile from './components/ProfileInfo/Profile'
import Userinfo from './components/ProfileInfo/Userinfo'
import JobProfile from './components/ProfileInfo/JobProfile'
import Address from './components/ProfileInfo/Address'
import Skills from './components/ProfileInfo/Skills'
import JobExp from './components/ProfileInfo/JobExp'
import DiscoverjobDetailes from './components/DisCoverJobs/DiscoverjobDetailes'

function App() {
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/myprofile' element={<MyProfile />}>
          <Route path='/myprofile/profile' index element={<Profile />}></Route>
          <Route path='/myprofile/userinfo' element={<Userinfo />}></Route>
          <Route path='/myprofile/jobprofile' element={<JobProfile />}></Route>
          <Route path='/myprofile/address' element={<Address />}></Route>
          <Route path='/myprofile/skills' element={<Skills />}></Route>
          <Route path='/myprofile/jobexp' element={<JobExp />}></Route>
        </Route>
        <Route path='/mybookmark' element={<Bookmarks />}></Route>


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
        <Route path='/findjob/:category' element={<Findjob />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='/dashboard/home' element={<AdminHome />}></Route>
          <Route path='/dashboard/myApplications' element={<MyApplications />} />
        </Route>
        <Route path='/applyJob/:id' element={<ApplyJob />}></Route>
        <Route path='/featurescompanydetails/:title' element={<FeatureCompanyDetails />}></Route>
        <Route path='/discoverjobdetails/:category' element={<DiscoverjobDetailes />}></Route>


      </Routes>
      <Footer />
    </div>
  )
}

export default App
