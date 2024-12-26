import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Repositories from './components/Repositories'
import { ReactComponent as ChevronDownIcon } from './assets/icons/chevron-down.svg'
import { ReactComponent as CloseIcon } from './assets/icons/close.svg'
import logo from './assets/logo.png'
import WelcomeScreen from './components/WelcomeScreen'
import './App.css'

// Layout component for dashboard pages
const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  return (
    <div className="app">
      <div className="mobile-header">
        <button className="menu-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <CloseIcon /> : <ChevronDownIcon />}
        </button>
        <img src={logo} alt="CodeAnt AI" className="mobile-logo" />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className="main-content">
        {children}
      </main>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public route - Sign Up/Login page */}
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/signup" element={<WelcomeScreen />} />
        
        {/* Dashboard routes */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Repositories />
          </DashboardLayout>
        } />
        
        <Route path="/repositories" element={
          <DashboardLayout>
            <Repositories />
          </DashboardLayout>
        } />

        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App