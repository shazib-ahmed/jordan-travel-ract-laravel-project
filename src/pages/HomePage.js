import React from 'react'
import HeroSection from '../component/homepage/HeroSection'
import TravelUsSection from '../component/homepage/TravelUsSection'
import WelcomeSection from '../component/homepage/WelcomeSection'
import FeedbackSection from '../component/homepage/FeedbackSection'
import FooterSection from '../component/footer/FooterSection'

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <WelcomeSection />
            <TravelUsSection />
            <FeedbackSection />
            <FooterSection />
        </>
    )
}

export default HomePage;