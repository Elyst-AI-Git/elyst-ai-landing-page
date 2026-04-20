import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Home from './pages/Home.jsx'
import CommunityPage from './pages/CommunityPage.jsx'
import StudentPage from './pages/events/StudentPage.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/circle" element={<CommunityPage />} />
        <Route path="/events/ai-for-juniors" element={<StudentPage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
