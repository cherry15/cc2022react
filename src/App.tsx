import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './app.css'
import Home from './pages/home/home'
import Dashboard from './pages/dashboard/dashboard'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
