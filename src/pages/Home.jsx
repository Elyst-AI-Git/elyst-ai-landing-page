import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
// import Blog from '../components/Blog.jsx'
import Testimonials from '../components/Testimonials.jsx'
import Footer from '../components/Footer.jsx'
import Community from '../components/Community.jsx'
import Events from '../components/Events.jsx'
import BottomCTA from '../components/BottomCTA.jsx'

const HOME_TITLE = 'Elyst AI - AI for Business & Community'
const HOME_DESC = 'We help businesses implement AI that works, and run a closed community for professionals applying it to their real work. Based in India.'
const HOME_URL = 'https://elystai.com/'
const HOME_OG_IMAGE = 'https://elystai.com/og-image.png'

const Home = () => {
  return (
    <>
        <Helmet>
          <title>{HOME_TITLE}</title>
          <meta name="description" content={HOME_DESC} />
          <link rel="canonical" href={HOME_URL} />
          <meta property="og:title" content={HOME_TITLE} />
          <meta property="og:description" content={HOME_DESC} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={HOME_URL} />
          <meta property="og:site_name" content="Elyst AI" />
          <meta property="og:image" content={HOME_OG_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={HOME_TITLE} />
          <meta name="twitter:description" content={HOME_DESC} />
          <meta name="twitter:image" content={HOME_OG_IMAGE} />
          <script type="application/ld+json">{JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Elyst AI",
            "url": "https://elystai.com",
            "description": "We help businesses implement AI that works, and run a closed community for professionals applying it to their real work.",
            "foundingLocation": "Kerala, India",
            "sameAs": []
          })}</script>
        </Helmet>
        <Navbar />
        <Hero />
        <About />
        <Events />
        {/* <Blog /> */}
        <Testimonials />
        <Community />
        <Footer />
    </>
  )
}

export default Home
