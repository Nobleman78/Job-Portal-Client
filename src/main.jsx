import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './Context/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
import JobProvider from './Context/JobProvider.jsx'
import TopcompanyJobsProvider from './Context/TopcompanyJobsProvider.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HelmetProvider>
      <AuthProvider>
        <JobProvider>
          <TopcompanyJobsProvider>
            <App />
          </TopcompanyJobsProvider>
        </JobProvider>
      </AuthProvider>
    </HelmetProvider>
  </BrowserRouter>,
)
