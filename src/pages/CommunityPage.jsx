import { useEffect } from 'react'
import CommunityNav from '../components/community/CommunityNav'
import CommunityHero from '../components/community/CommunityHero'
import CommunityAbout from '../components/community/CommunityAbout'
import CommunityBenefits from '../components/community/CommunityBenefits'
import CommunityForWho from '../components/community/CommunityForWho'
import CommunityPricing from '../components/community/CommunityPricing'
import CommunityJoin from '../components/community/CommunityJoin'
import CommunityFAQ from '../components/community/CommunityFAQ'
import CommunityFinalCTA from '../components/community/CommunityFinalCTA'
import Footer from '../components/Footer'

const CommunityPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <CommunityNav />
      <CommunityHero />
      <CommunityAbout />
      <CommunityBenefits />
      <CommunityForWho />
      <CommunityPricing />
      <CommunityJoin />
      <CommunityFAQ />
      <CommunityFinalCTA />
      <Footer />
    </>
  )
}

export default CommunityPage
