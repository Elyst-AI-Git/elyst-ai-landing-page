import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Courses from '../components/Courses.jsx'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Courses />
    </>
  )
}

export default Home
