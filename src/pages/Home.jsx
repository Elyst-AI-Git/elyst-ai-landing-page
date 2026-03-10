import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Courses from '../components/Courses.jsx'
import Blog from '../components/Blog.jsx'
import Testimonials from '../components/Testimonials.jsx'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Courses />
        <Blog />
        <Testimonials />
    </>
  )
}

export default Home
