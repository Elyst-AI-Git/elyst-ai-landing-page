import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CommunityPage from './pages/CommunityPage.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle" element={<CommunityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
