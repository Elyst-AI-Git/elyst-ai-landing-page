import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Blog from '../components/Blog.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'
import Community from '../components/Community.jsx'
import Events from '../components/Events.jsx'
import BottomCTA from '../components/BottomCTA.jsx'

const Home = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Blog />
        <Testimonials />
        <Community />
        <Footer />
    </>
  )
}

export default Home
