import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
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

const CIRCLE_TITLE = 'Elyst AI Circle - Join the AI Circle'
const CIRCLE_DESC = 'A closed community for professionals applying AI to their real work. Weekly signals, monthly catchups. 25 founding spots only.'
const CIRCLE_URL = 'https://elystai.com/circle'
const CIRCLE_OG_IMAGE = 'https://elystai.com/og-image.png'

const CommunityPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Helmet>
        <title>{CIRCLE_TITLE}</title>
        <meta name="description" content={CIRCLE_DESC} />
        <link rel="canonical" href={CIRCLE_URL} />
        <meta property="og:title" content={CIRCLE_TITLE} />
        <meta property="og:description" content={CIRCLE_DESC} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CIRCLE_URL} />
        <meta property="og:site_name" content="Elyst AI" />
        <meta property="og:image" content={CIRCLE_OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={CIRCLE_TITLE} />
        <meta name="twitter:description" content={CIRCLE_DESC} />
        <meta name="twitter:image" content={CIRCLE_OG_IMAGE} />
      </Helmet>
      <CommunityNav />
      <CommunityHero />
      <CommunityAbout />
      {/* <CommunityBenefits /> */}
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
